package com.conygre.spring.SpringRESTApi.api;

import java.util.Collection;

import com.conygre.spring.SpringRESTApi.Exceptions.ResourceNotFoundException;
import com.conygre.spring.SpringRESTApi.entities.StockSymbol;
import com.conygre.spring.SpringRESTApi.service.TradeableService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ables/")
public class TradeableController {
    
    @Autowired
    private TradeableService svTradeable;

    @GetMapping()
    public Collection<StockSymbol> getAllTradeables() {
        return svTradeable.getAllTradeables();
    }

    /// POST
    @PostMapping()
    public void addSymbol(@RequestBody StockSymbol symbol) {
        svTradeable.addSymbol(symbol);
    }

    /// PUT
    @PutMapping() // , value="/{id}") // mmmm maybe
    public void upsertTrade(@RequestBody StockSymbol symbol) {
        /// there should rly be some business rules here (rn we can update quantity / price / etc lol)
        if (symbol == null) throw new ResourceNotFoundException("Symbol not found");
        svTradeable.getSymbolById(symbol.getId()).orElseThrow(() -> new ResourceNotFoundException("Symbol not found: " + symbol));
        svTradeable.updateStockSymbol(symbol);
    }

    /// DELETE
    @DeleteMapping()
    public void deleteTrade(@RequestBody StockSymbol symbol) {
        if (symbol == null) throw new ResourceNotFoundException("Symbol not found");
        svTradeable.getSymbolById(symbol.getId()).orElseThrow(() -> new ResourceNotFoundException("Symbol not found: " + symbol));
        svTradeable.deleteStockSymbol(symbol);
    }
}
