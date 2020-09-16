package com.conygre.spring.SpringRESTApi;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Collection;

import com.conygre.spring.SpringRESTApi.entities.Trade;
import com.conygre.spring.SpringRESTApi.entities.TradeAction;
import com.conygre.spring.SpringRESTApi.service.TradeService;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;

@ContextConfiguration(classes=MongoJavaConfig.class)
@SpringBootTest
class SpringRestApiApplicationTests {

	// @Autowired
	// private TradeService tradeService;

	@Test
	void contextLoads() throws ParseException {
	}

	// 	try{
	// 	SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");

	// 	Trade trade1, trade2, trade3;
	// 	trade1 = new Trade(format.parse("20200831"), "apple", 5, 153.84, TradeAction.ASK);
	// 	trade2 = new Trade(format.parse("20200830"), "apple", 2, 135.21, TradeAction.BID);
	// 	trade3 = new Trade(format.parse("20200815"), "apple", 2, 12.69, TradeAction.ASK);

	// 	tradeService.addTrade(trade1);
	// 	tradeService.addTrade(trade2);
	// 	tradeService.addTrade(trade3);

	// 	Collection<Trade> tradeCollection = tradeService.getAllTrades();
	// 	tradeCollection.forEach(trade -> System.out.println(trade.getCreationDate()));
	// 	assertEquals(3, tradeCollection.size());
	// 	}
	// 	catch (Exception e){};
	// }

	// @AfterEach
	// void cleanUp(){
	// 	/*for (String collectionName : tradeService.getCollectionNames()) {
    //         if (!collectionName.startsWith("system.")) {
    //             tradeService.getCollection(collectionName).remove(new BasicDBObject());
    //         }
    //     }*/
    // }
}
