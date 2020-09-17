package com.conygre.spring.SpringRESTApi.data;

import com.conygre.spring.SpringRESTApi.entities.StockSymbol;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TradeableRepository extends MongoRepository<StockSymbol, ObjectId>
{

}