package com.conygre.spring.SpringRESTApi.entities;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class StockSymbol {
    @Id
    private String id;
    private String companyName;
    private String companySymbol;

    private StockIndex stockIndex = StockIndex.NASDAQ;
    
    public StockSymbol(String companyName, String companySymbol) {
        this.companyName = companyName;
        this.companySymbol = companySymbol;
    }

    public StockSymbol() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCompanySymbol() {
        return companySymbol;
    }

    public void setCompanySymbol(String companySymbol) {
        this.companySymbol = companySymbol;
    }

    public StockIndex getStockIndex() {
        return stockIndex;
    }

    public void setStockIndex(StockIndex stockIndex) {
        this.stockIndex = stockIndex;
    }
}