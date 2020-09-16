package com.conygre.spring.SpringRESTApi.service;

import java.util.List;
import java.util.NoSuchElementException;

import com.conygre.spring.SpringRESTApi.data.TradeRepository;
import com.conygre.spring.SpringRESTApi.entities.Trade;
import com.conygre.spring.SpringRESTApi.entities.TradeStatus;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class TradeSim {
    private static final Logger LOG = LoggerFactory.getLogger(TradeSim.class);

    @Autowired
    private TradeRepository tradeRepository;

    @Transactional
    public List<Trade> findTradesForProcessing() {
        List<Trade> foundTrades = (List<Trade>)tradeRepository.findByStatus(TradeStatus.CREATED)
                .orElseThrow(() -> new NoSuchElementException());

        for(Trade thisTrade: foundTrades) {
            thisTrade.setStatus(TradeStatus.PENDING);
            tradeRepository.save(thisTrade);
        }

        return foundTrades;
    }

    @Transactional
    public List<Trade> findTradesForFilling() {
        List<Trade> foundTrades = (List<Trade>)tradeRepository.findByStatus(TradeStatus.PENDING)
        .orElseThrow(() -> new NoSuchElementException());

        for(Trade thisTrade: foundTrades) {
            if((int) (Math.random()*10) > 9) { 
                // cheching whatever we are trying to buy or sell has buyers/sellers in the market 
                //(hardcode 10% rejected rate)
                thisTrade.setStatus(TradeStatus.REJECTED);
            } else {
                // TODO: Handle trade price and quantity (way) later. 
                // double cur = userId.getTrade(id).portfolio[trade.getTicker()];
                // cur += trade.getTheQuantityThing();
                // this.user();
                 /// quantity here ? 
                 /*
                 👓 :will: 👓
                    infinite cash, infinite shares
                    anything is possible
                    until portfolios
                 👓 :will: 👓
                 */
                thisTrade.setStatus(TradeStatus.FILLED);
            }
            tradeRepository.save(thisTrade);
        }

        return foundTrades;
    }

    @Scheduled(fixedRateString = "${scheduleRateMs:10000}")
    public void runSim() {
        LOG.debug("Main loop running!");

        int tradesForFilling = findTradesForFilling().size();
        LOG.debug("Found " + tradesForFilling + " trades to be filled/rejected");

        int tradesForProcessing = findTradesForProcessing().size();
        LOG.debug("Found " + tradesForProcessing + " trades to be processed");
    }
}
