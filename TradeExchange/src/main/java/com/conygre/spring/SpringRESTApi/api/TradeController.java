package com.conygre.spring.SpringRESTApi.api;

import java.util.Collection;

import com.conygre.spring.SpringRESTApi.Exceptions.ResourceNotFoundException;
import com.conygre.spring.SpringRESTApi.entities.Trade;
import com.conygre.spring.SpringRESTApi.entities.TradeStatus;
import com.conygre.spring.SpringRESTApi.service.TradeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class TradeController {
    @Autowired
    private TradeService svTrade;

    /// GET
    @GetMapping()
    public Collection<Trade> getAllTrades() {
        return svTrade.getAllTrades();
    }

    @GetMapping(value = "/{id}")
    public Trade getTradeById(@PathVariable("id") String id) {
        return svTrade.getTradeById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
    }

    @GetMapping(value = "/ticker/{stockTicker}")
    public Collection<Trade> getAllTradesByStockTicker(@PathVariable("stockTicker") String stockTicker){
        return svTrade.getAllTradesByStockTicker(stockTicker)
            .orElseThrow(() -> new ResourceNotFoundException("Trades not found with stock ticker: " + stockTicker));
    }

    @GetMapping(value = "/status/{status}")
    public Collection<Trade> getAllTradesByStatus(@PathVariable("status") TradeStatus status){
        return svTrade.getAllTradesByStatus(status)
            .orElseThrow(() -> new ResourceNotFoundException("Trades not found with status: " + status));
    }

    /// POST
    @PostMapping()
    public void addTrade(@RequestBody Trade trade) {
        svTrade.addTrade(trade);
    }

    /// PUT
    @PutMapping() // , value="/{id}") // mmmm maybe
    public void upsertTrade(@RequestBody Trade trade) {
        /// there should rly be some business rules here (rn we can update quantity / price / etc lol)
        if (trade == null) throw new ResourceNotFoundException("Trade not found");
        svTrade.getTradeById(trade.getId()).orElseThrow(() -> new ResourceNotFoundException("Trade not found: " + trade));
        svTrade.updateTrade(trade);
    }

    /// DELETE
    @DeleteMapping()
    public void deleteTrade(@RequestBody Trade trade) {
        if (trade == null) throw new ResourceNotFoundException("Trade not found");
        svTrade.getTradeById(trade.getId()).orElseThrow(() -> new ResourceNotFoundException("Trade not found: " + trade));
        svTrade.deleteTrade(trade);
    }

    @DeleteMapping(value="/{id}")
    public void deleteTradeById(@PathVariable("id") String id) {
        svTrade.getTradeById(id).orElseThrow(() -> new ResourceNotFoundException("Trade not found with id: " + id));

        svTrade.deleteTradeById(id);
    }
}