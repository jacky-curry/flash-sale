package com.actionworks.flashsale.domain.model.entity;

import com.actionworks.flashsale.domain.model.enums.FlashActivityStatus;
import com.alibaba.fastjson.JSON;
import lombok.Data;
import org.springframework.util.StringUtils;

import java.io.Serializable;
import java.util.Date;

@Data
public class FlashActivity implements Serializable {
    /**
     * 活动ID
     */
    private Long Id;
    /**
     * 活动名称
     */
    private String activityName;
    /**
     * 活动开始时间
     */
    private Date startTime;
    /**
     * 活动结束时间
     */
    private Date endTime;
    /**
     * 活动状态
     */
    private Integer status;
    /**
     * 活动描述
     */
    private String activityDesc;

    @Override
    public String toString() {
        return JSON.toJSONString(this);
    }


    /**
     * 校验参数
     * @return
     */
    public boolean validateParamsForCreateOrUpdate() {
        if (StringUtils.isEmpty(activityName)
                || startTime == null
                || endTime == null || endTime.before(startTime) || endTime.before(new Date())) {
            return false;
        }
        return true;
    }


    /**
     * 判断活动是否上线
     * 活动有三种状态，这里使用到枚举类FlashActivityStatus来判断这个上线状态，符合设计模式里面的单一责任原则
     * @return
     */
    public boolean isOnline() {
        return FlashActivityStatus.isOnline(status);
    }

    /**
     * 活动是否开始
     * @return
     */
    public boolean isInProgress() {
        Date now = new Date();
        return startTime.before(now) && endTime.after(now);
    }
}
