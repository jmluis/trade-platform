package com.conygre.spring.SpringRESTApi.data;

import java.util.Collection;
import java.util.Optional;

import com.conygre.spring.SpringRESTApi.entities.Trade;
import com.conygre.spring.SpringRESTApi.entities.TradeStatus;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface TradeRepository extends MongoRepository<Trade, ObjectId>
{
    //Ask about this
    public Optional<Collection<Trade>> findByStatus(TradeStatus status);

    @Query(value="{'stock.companySymbol': ?0  }", sort = "{ creationDate : -1 }")
    public Optional<Collection<Trade>> customFindByStockTicker(String StockTicker);
}