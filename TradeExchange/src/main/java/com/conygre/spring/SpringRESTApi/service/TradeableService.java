package com.conygre.spring.SpringRESTApi.service;

import java.util.List;
import java.util.Optional;

import com.conygre.spring.SpringRESTApi.data.TradeableRepository;
import com.conygre.spring.SpringRESTApi.entities.StockSymbol;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TradeableService {
    @Autowired
    private TradeableRepository tradeableRepository;

    /* CRUD */

    // C
    public void addSymbol(StockSymbol symbol) {
        tradeableRepository.insert(symbol);
    }

    // D
    public void deleteStockSymbolById(ObjectId id) {
        tradeableRepository.deleteById(id);
    }

    public void deleteStockSymbolById(String id) {
        deleteStockSymbolById(new ObjectId(id));
    }

    public void deleteStockSymbol(StockSymbol symbol) {
        tradeableRepository.delete(symbol);
    }

    // R
    public boolean hasSymbol(StockSymbol symbol) {
        if (symbol == null) return false;
        return hasSymbol(new ObjectId(symbol.getId()));
    }
    
    public boolean hasSymbol(ObjectId id) {
        return getSymbolById(id).isPresent();
    }

    public Optional<StockSymbol> getSymbolById(ObjectId id) {
        return tradeableRepository.findById(id);
    }

    public Optional<StockSymbol> getSymbolById(String id) {
        return getSymbolById(new ObjectId(id));
    }

    public List<StockSymbol> getAllTradeables() {
        return tradeableRepository.findAll();
    }

    // U
    public void updateStockSymbol(StockSymbol other) {
        tradeableRepository.save(other);
    }
}