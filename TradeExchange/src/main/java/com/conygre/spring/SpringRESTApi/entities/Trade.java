package com.conygre.spring.SpringRESTApi.entities;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;


/*
    If this component were included in a system that would update attempt to execute Pending trades, then Trade status may have one of a number of values, you may consider creating an Enum for these states (this is optional):
    •CREATED•PENDING•CANCELLED•REJECTED•FILLED•PARTIALLY FILLED•ERROR
*/
@Document
public class Trade {
    @Id
    private String id;
    @DateTimeFormat(pattern = "yyyy-MM-dd hh:mm:ss")
    private Date creationDate;
    private String stockTicker;
    private int stockQuantity;
    private double requestPrice;
    private TradeStatus status = TradeStatus.CREATED;

    private TradeAction action;

    public Trade(Date creationDate, String stockTicker, int stockQuantity, double requestPrice, TradeAction action) {
        this.creationDate = creationDate;
        this.stockTicker = stockTicker;
        this.stockQuantity = stockQuantity;
        this.requestPrice = requestPrice;
        this.action = action;
    }

    public Trade() {
        // No property 'status' found on class com.conygre.spring.SpringRESTApi.entities.Trade! Did you mean: status?
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    public String getStockTicker() {
        return stockTicker;
    }

    public void setStockTicker(String stockTicker) {
        this.stockTicker = stockTicker;
    }

    public int getStockQuantity() {
        return stockQuantity;
    }

    public void setStockQuantity(int stockQuantity) {
        this.stockQuantity = stockQuantity;
    }

    public double getRequestPrice() {
        return requestPrice;
    }

    public void setRequestPrice(double requestPrice) {
        this.requestPrice = requestPrice;
    }

    public TradeStatus getStatus() {
        return status;
    }

    public void setStatus(TradeStatus status) {
        this.status = status;
    }

    public TradeAction getAction() {
        return action;
    }

    public void setAction(TradeAction action) {
        this.action = action;
    }

    @Override
    public String toString() {
        return String.format("%s\t%s\t%s", this.getStockTicker(), this.getStatus(), this.getAction());
   }
}