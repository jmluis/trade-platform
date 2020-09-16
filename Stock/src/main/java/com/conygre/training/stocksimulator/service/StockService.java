package com.conygre.training.stocksimulator.service;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.conygre.training.stocksimulator.model.*;
import  com.conygre.training.stocksimulator.exception.SymbolNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;
import java.util.stream.Collectors;

/**
 * A service to retrieve Company and Quote information.
 * 
 * @author Blair Gao
 * Template from David Ferreira Pinto
 *
 */
@Service
public class StockService {
	protected String quote_url = "http://dev.markitondemand.com/Api/v2/Quote/json?symbol={symbol}";
	protected String company_url = "http://dev.markitondemand.com/Api/v2/Lookup/json?input={name}";

	protected String yahoo_url = "https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol in ('{symbol}')&format={fmt}&env={env}";

	protected String ENV = "http://datatables.org/alltables.env";

	public static final String FMT = "json";

	private static final Logger logger = LoggerFactory.getLogger(StockService.class);

	/*
	 * cannot autowire as don't want ribbon here.
	 */
	private RestTemplate restTemplate;

    public StockService() {
        restTemplate = new RestTemplate();
        ObjectMapper objectMapper = new ObjectMapper().enable(DeserializationFeature.ACCEPT_SINGLE_VALUE_AS_ARRAY);
        MappingJackson2HttpMessageConverter messageConverter = new MappingJackson2HttpMessageConverter();
        messageConverter.setObjectMapper(objectMapper);
        List<HttpMessageConverter<?>> messageConverters = new ArrayList<>();
        messageConverters.add(messageConverter);
        restTemplate.setMessageConverters(messageConverters);
    }

    /**
     * Retrieve one or more quotes.
     *
     * @param symbols comma delimited list of symbols.
     * @return a list of quotes.
     */

    public List<Stock> getStocks(String symbols) throws SymbolNotFoundException {
        logger.debug("retrieving Stocks for: " + symbols);
        if ( symbols.isEmpty() ) return new ArrayList<>();

        YahooQuoteResponses responses = restTemplate.getForObject(yahoo_url, YahooQuoteResponses.class, symbols, FMT, ENV);
        logger.debug("Got responses: " + responses);
        List<YahooQuote> yahooQuotes = responses.getResults().getQuoteList().getQuote();
        Date createDate = responses.getResults().getCreated();

        List<Stock> quotes = yahooQuotes
                .stream()
                .map(yQuote -> StockMapper.INSTANCE.mapFromYahooQuote(yQuote, createDate))
                .collect(Collectors.toList());

        for (Stock quote : quotes) {
            if ( quote.getName() == null ) throw new SymbolNotFoundException( quote.getSymbol() + " not found" );
        }
        return quotes;
    }

	/**
	 * Retrieves an up to date quote for the given symbol.
	 * 
	 * @param symbols Array of symbols to retrieve quotes for.
	 * @return The quote object or null if not found.
	 * @throws SymbolNotFoundException
	 */
	public List<Stock> getMarkitondemandQuotes(String symbols) throws SymbolNotFoundException {
        List<Stock> result = new ArrayList<>();
        String[] splitSymbols = symbols.split(",");

        for (String symbol : splitSymbols) {
            logger.debug("StockService.getQuote: retrieving quote for: " + symbol);
            Map<String, String> params = new HashMap<>();
            params.put("symbol", symbol);

            Stock quote = restTemplate.getForObject(quote_url, Stock.class, params);
            logger.debug("StockService.getQuote: retrieved quote: " + quote);
            result.add(quote);

            if (quote.getSymbol() == null) {
                throw new SymbolNotFoundException("Symbol not found: " + symbol);
            }
        }

		return result;
	}

	@SuppressWarnings("unused")
	private List<Stock> getQuotesFallback(String symbols) {
		logger.debug("StockService.getQuoteFallback: circuit opened for symbols: " + symbols);
		throw new RuntimeException("Quote service unavailable.");
	}

    /**
     * Retrieves a list of CompanyInfo objects. Given the name parameters, the
     * return list will contain objects that match the search both on company
     * name as well as symbol.
     *
     * @param name
     *            The search parameter for company name or symbol.
     * @return The list of company information.
     */
    public List<CompanyInfo> getCompanyInfo(String name) {
        logger.debug("StockService.getCompanyInfo: retrieving info for: " + name);
        Map<String, String> params = new HashMap<>();
        params.put("name", name);
        CompanyInfo[] companies = restTemplate.getForObject(company_url,
                CompanyInfo[].class, params);
        logger.debug("StockService.getCompanyInfo: retrieved info: " + Arrays.toString(companies));
        return Arrays.asList(companies);
    }

	@SuppressWarnings("unused")
	private Stock getCompanyInfoFallback(String symbol)
			throws SymbolNotFoundException {
		logger.debug("StockService.getCompanyInfoFallback: circuit opened for symbol: "
				+ symbol);
		throw new RuntimeException("Company Info service unavailable.");
	}
}
