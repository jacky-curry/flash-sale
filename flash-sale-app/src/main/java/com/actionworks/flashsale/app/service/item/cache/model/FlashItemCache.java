package com.actionworks.flashsale.app.service.item.cache.model;

import com.actionworks.flashsale.domain.model.entity.FlashItem;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class FlashItemCache {
    protected boolean exist; // 商品是否存在的标志
    private FlashItem flashItem; // 商品信息
    private Long version; // 版本号
    private boolean later; // 是否稍后尝试

    public FlashItemCache with(FlashItem flashActivity) {
        this.exist = true;
        this.flashItem = flashActivity;
        return this;
    }

    public FlashItemCache withVersion(Long version) {
        this.version = version;
        return this;
    }

    public FlashItemCache tryLater() {
        this.later = true;
        return this;
    }

    public FlashItemCache notExist() {
        this.exist = false;
        return this;
    }
}
