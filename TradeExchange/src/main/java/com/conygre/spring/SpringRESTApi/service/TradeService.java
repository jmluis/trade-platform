package com.conygre.spring.SpringRESTApi.service;

import java.util.Collection;
import java.util.Optional;

import com.conygre.spring.SpringRESTApi.data.TradeRepository;
import com.conygre.spring.SpringRESTApi.entities.Trade;
import com.conygre.spring.SpringRESTApi.entities.TradeStatus;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class TradeService {
    @Autowired
    private TradeRepository tradeRepository;

    /* CRUD */

    // C
    public void addTrade(final Trade trade) {
        tradeRepository.insert(trade);
    }

    // D
    public void deleteTradeById(final ObjectId id) {
        tradeRepository.deleteById(id);
    }

    public void deleteTradeById(final String id) {
        deleteTradeById(new ObjectId(id));
    }

    public void deleteTrade(final Trade trade) {
        tradeRepository.delete(trade);
    }

    // R
    public boolean hasTrade(final Trade trade) {
        if (trade == null) return false;
        return hasTrade(trade.getId());
    }
    
    public boolean hasTrade(final String id) {
        return hasTrade(new ObjectId(id));
    }
    
    public boolean hasTrade(final ObjectId id) {
        return getTradeById(id).isPresent();
    }

    public Optional<Trade> getTradeById(final ObjectId id) {
        return tradeRepository.findById(id);
    }

    public Optional<Trade> getTradeById(final String id) {
        return getTradeById(new ObjectId(id));
    }

    public Collection<Trade> getAllTrades() {
        return tradeRepository.findAll(Sort.by("creationDate").descending());
    }

    public Optional<Collection<Trade>> getAllTradesByStockTicker(final String ticker) {
        return tradeRepository.customFindByStockTicker(ticker);
        // final ExampleMatcher matcher = ExampleMatcher.matching()
        //     .withMatcher("companySymbol", exact().ignoreCase());
        // final Example<StockSymbol> stockSymbolExample = Example.of(ticker, matcher);
        
        // return tradeRepository.findAll(stockSymbolExample);
    }

    public Optional<Collection<Trade>> getAllTradesByStatus(final TradeStatus status) {
        return tradeRepository.findByStatus(status);
    }

    // U
    public void updateTrade(final Trade other) {
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