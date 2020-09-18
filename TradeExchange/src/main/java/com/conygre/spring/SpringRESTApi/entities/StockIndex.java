package com.conygre.spring.SpringRESTApi.entities;

import org.springframework.core.serializer.support.SerializationFailedException;

public enum StockIndex {
    NASDAQ("NASDAQ");

    private String index;

    private StockIndex(String index) {
        this.index = index;
    }

    public String getIndex() {
        return this.index;
    } 

    @Override
    public String toString() {
        return String.valueOf(getIndex());
    }

    public static StockIndex fromValue(String value) {
        for (StockIndex act : StockIndex.values()) {
            if (String.valueOf(act).equals(value)) {
                return act;
            }
        }

        throw new SerializationFailedException("[StockIndex] Failed to serialize " + value);
    }
}
