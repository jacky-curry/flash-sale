package com.actionworks.flashsale.app.service.item.cache;

import com.actionworks.flashsale.app.service.item.cache.model.FlashItemCache;
import com.actionworks.flashsale.cache.DistributedCacheService;
import com.actionworks.flashsale.domain.model.entity.FlashItem;
import com.actionworks.flashsale.domain.service.FlashItemDomainService;
import com.actionworks.flashsale.lock.DistributedLock;
import com.actionworks.flashsale.lock.DistributedLockFactoryService;
import com.alibaba.fastjson.JSON;
import com.google.common.cache.Cache;
import com.google.common.cache.CacheBuilder;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

import static com.actionworks.flashsale.app.model.constants.CacheConstants.FIVE_MINUTES;
import static com.actionworks.flashsale.app.model.constants.CacheConstants.ITEM_CACHE_KEY;
import static com.actionworks.flashsale.util.StringUtil.link;

@Service
public class FlashItemCacheService {
    private final static Logger logger = LoggerFactory.getLogger(FlashItemCacheService.class);

    // 本地缓存，使用Guava CacheBuilder
    private final static Cache<Long, FlashItemCache> flashItemLocalCache = CacheBuilder.newBuilder()
            .initialCapacity(10)
            .concurrencyLevel(5)
            .expireAfterWrite(10, TimeUnit.SECONDS)
            .build();

    private static final String UPDATE_ITEM_CACHE_LOCK_KEY = "UPDATE_ITEM_CACHE_LOCK_KEY_";
    private final Lock localCacheUpdatelock = new ReentrantLock();  // 可重入锁，同一线程可以重复获取锁，不会导致死锁，默认模式是非公平的锁

    @Resource
    //分布式缓存服务接口，使用Redis作为分布式服务
    private DistributedCacheService distributedCacheService;

    @Resource
    //秒杀品领域服务
    private FlashItemDomainService flashItemDomainService;

    @Resource
    //分布式缓存锁服务，使用Redisson实现
    private DistributedLockFactoryService distributedLockFactoryService;

    public FlashItemCache getCachedItem(Long itemId, Long version) {
        // 检查本地缓存中是否存在该商品
        FlashItemCache flashItemCache = flashItemLocalCache.getIfPresent(itemId);
        if (flashItemCache != null) {
            if (version == null) {
                logger.info("itemCache|命中本地缓存|{}", itemId);
                return flashItemCache;
            }
            if (version.equals(flashItemCache.getVersion()) || version < flashItemCache.getVersion()) {
                logger.info("itemCache|命中本地缓存|{}|{}", itemId, version);
                return flashItemCache;
            }
            if (version > flashItemCache.getVersion()) {
                return getLatestDistributedCache(itemId);
            }
        }
        return getLatestDistributedCache(itemId);
    }

    private FlashItemCache getLatestDistributedCache(Long itemId) {
        logger.info("itemCache|读取远程缓存|{}", itemId);
        // 从分布式缓存中获取商品信息
        FlashItemCache distributedFlashItemCache = distributedCacheService.getObject(buildItemCacheKey(itemId), FlashItemCache.class);
        if (distributedFlashItemCache == null) {
            // 如果分布式缓存中不存在该商品信息，则尝试通过锁更新缓存
            distributedFlashItemCache = tryToUpdateItemCacheByLock(itemId);
        }
        if (distributedFlashItemCache != null && !distributedFlashItemCache.isLater()) {
            boolean isLockSuccess = localCacheUpdatelock.tryLock();
            if (isLockSuccess) {
                try {
                    // 使用最新的商品信息更新本地缓存
                    flashItemLocalCache.put(itemId, distributedFlashItemCache);
                    logger.info("itemCache|本地缓存已更新|{}", itemId);
                } finally {
                    localCacheUpdatelock.unlock();
                }
            }
        }
        return distributedFlashItemCache;
    }

    public FlashItemCache tryToUpdateItemCacheByLock(Long itemId) {
        logger.info("itemCache|更新远程缓存|{}", itemId);
        // 获取分布式锁，用于更新缓存
        DistributedLock lock = distributedLockFactoryService.getDistributedLock(UPDATE_ITEM_CACHE_LOCK_KEY + itemId);
        try {
            boolean isLockSuccess = lock.tryLock(1, 5, TimeUnit.SECONDS);
            if (!isLockSuccess) {
                return new FlashItemCache().tryLater();
            }
            // 检查分布式缓存中是否已存在该商品信息
            FlashItemCache distributedFlashItemCache = distributedCacheService.getObject(buildItemCacheKey(itemId), FlashItemCache.class);
            if (distributedFlashItemCache != null) {
                return distributedFlashItemCache;
            }
            // 从领域服务中获取商品信息
            FlashItem flashItem = flashItemDomainService.getFlashItem(itemId);
            FlashItemCache flashItemCache;
            if (flashItem == null) {
                flashItemCache = new FlashItemCache().notExist();
            } else {
                // 创建商品缓存对象，并设置版本号为当前时间戳！
                flashItemCache = new FlashItemCache().with(flashItem).withVersion(System.currentTimeMillis());
            }
            // 将商品缓存对象放入分布式缓存中
            distributedCacheService.put(buildItemCacheKey(itemId), JSON.toJSONString(flashItemCache), FIVE_MINUTES);
            logger.info("itemCache|远程缓存已更新|{}", itemId);
            return flashItemCache;
        } catch (InterruptedException e) {
            logger.error("itemCache|远程缓存更新失败|{}", itemId);
            return new FlashItemCache().tryLater();
        } finally {
            lock.unlock();
        }
    }

    private String buildItemCacheKey(Long itemId) {
        return link(ITEM_CACHE_KEY, itemId);
    }
}
