package com.conygre.spring.SpringRESTApi.service;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import com.conygre.spring.SpringRESTApi.data.TradeRepository;
import com.conygre.spring.SpringRESTApi.entities.Trade;
import com.conygre.spring.SpringRESTApi.entities.TradeStatus;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TradeService {
    @Autowired
    private TradeRepository tradeRepository;

    /* CRUD */

    // C
    public void addTrade(Trade trade) {
        tradeRepository.insert(trade);
    }

    // D
    public void deleteTradeById(ObjectId id) {
        tradeRepository.deleteById(id);
    }

    public void deleteTradeById(String id) {
        deleteTradeById(new ObjectId(id));
    }

    public void deleteTrade(Trade trade) {
        tradeRepository.delete(trade);
    }

    // R
    public boolean hasTrade(Trade trade) {
        if (trade == null) return false;
        return hasTrade(trade.getId());
    }
    
    public boolean hasTrade(String id) {
        return hasTrade(new ObjectId(id));
    }
    
    public boolean hasTrade(ObjectId id) {
        return getTradeById(id).isPresent();
    }

    public Optional<Trade> getTradeById(ObjectId id) {
        return tradeRepository.findById(id);
    }

    public Optional<Trade> getTradeById(String id) {
        return getTradeById(new ObjectId(id));
    }

    public List<Trade> getAllTrades() {
        return tradeRepository.findAll();
    }

    public Optional<Collection<Trade>> getAllTradesByStockTicker(String ticker) {
        return tradeRepository.customFindByStockTicker(ticker);
    }

    public Optional<Collection<Trade>> getAllTradesByStatus(TradeStatus status) {
        return tradeRepository.findByStatus(status);
    }

    // U
    public void updateTrade(Trade other) {
        tradeRepository.save(other);
    }

    /*
    public Optional<Trade> getTradeByQtyPriceInverseAct(String action, String qtyticker, double price) {

        int filledQty = qtyticker;
        while (filledQty > 0)

        if (action == "BUY") {
            // look for latest sell & that price?
            if (price > latest(Highest)SellPrice) {
                // sry loser u cant
            }
        } else if (action == "SELL") {
            // look for latest BUY & ** that price **?
            // look for latest sell & that price?
            if (price < latest(Lowest)BuyPrice) {
                // sry loser u cant sell bc 
            }
        }
    }
    */
}