package com.conygre.spring.SpringRESTApi.entities;

import org.springframework.core.serializer.support.SerializationFailedException;

public enum TradeStatus {
    CREATED("CREATED"),
    PENDING("PENDING"),
    FILLED("FILLED"),
    REJECTED("REJECTED");

    private String status;

    private TradeStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return this.status;
    } 

    @Override
    public String toString() {
        return String.valueOf(getStatus());
    }

    public static TradeStatus fromValue(String value) {
        for (TradeStatus act : TradeStatus.values()) {
            if (String.valueOf(act).equals(value)) {
                return act;
            }
        }

        throw new SerializationFailedException("[TradeStatus] Failed to serialize " + value);
    }
}
