package com.conygre.training.stocksimulator.model;

import java.util.Date;

/**
 * Singleton Class to map between quote objects as returned by different public quotes URLS
 * 
 * @author Blair Gao
 * Template from Sufyaan Kazi
 */
public class StockMapper {
	public static StockMapper INSTANCE = new StockMapper();

	private StockMapper(){
		super();
	}

	/**
	 * Maps between a Yahoo Quote to Markit Quote
	 * 
	 * @param yQuote YahooQuote
	 * @return new quote
	 * @author David Ferreira Pinto
	 */
	public Stock mapFromYahooQuote(YahooQuote yQuote, Date created){
		if(yQuote == null){
			return null;
		}
		
		
		Stock mappedStock = new Stock();
		mappedStock.setChange(yQuote.getChange());
		if (yQuote.getPercentChange() != null) {
			mappedStock.setChangePercent(Float.parseFloat(yQuote.getPercentChange().replace("%", "")));
		}
		mappedStock.setChangePercentYTD(null);
		mappedStock.setChangeYTD(null);
		mappedStock.setHigh(yQuote.getDaysHigh());
		mappedStock.setLastPrice(yQuote.getLastTradePriceOnly());
		mappedStock.setLow(yQuote.getDaysLow());
		mappedStock.setMarketCap(null);
		mappedStock.setmSDate(null);
		mappedStock.setName(yQuote.getName());
		mappedStock.setOpen(yQuote.getOpen());
		mappedStock.setStatus("SUCCESS");
		mappedStock.setSymbol(yQuote.getSymbol());
		mappedStock.setTimestamp(created);
		mappedStock.setVolume(yQuote.getVolume());
		
		return mappedStock;
	}
}
