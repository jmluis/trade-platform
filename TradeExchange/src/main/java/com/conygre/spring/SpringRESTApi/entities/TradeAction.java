package com.conygre.spring.SpringRESTApi.entities;

import org.springframework.core.serializer.support.SerializationFailedException;

public enum TradeAction {
    ASK("ASK"),
    BID("BID");

    private String action;

    private TradeAction(String action) {
        this.action = action;
    }

    public String getAction() {
        return action;
    }

    @Override
    public String toString() {
        return String.valueOf(getAction());
    }

    public static TradeAction fromValue(String value) {
        for (TradeAction act : TradeAction.values()) {
            if (String.valueOf(act).equals(value)) {
                return act;
            }
        }
        throw new SerializationFailedException("[TradeAction] Failed to serialize " + value);
    }
}