package com.conygre.training.user.controller;

import java.math.BigDecimal;

import com.conygre.training.user.model.User;

import com.conygre.training.user.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
import com.conygre.spring.SpringRESTApi.entities.Trade;

/**
 * REST controller for the users microservice.
 * @author Blair Gao
 * Template from David Ferreira Pinto and Maxim Avezbakiev
 */
@RestController
public class UserController {

	private static final Logger logger = LoggerFactory.getLogger(com.conygre.training.user.controller.UserController.class);

	/**
	 * The service to delegate calls to.
	 */
	@Autowired
	private UserService service;

	/**
	 * REST call to retrieve the account with the given id as userId.
	 * 
	 * @param id The id of the user to retrieve the account for.
	 * @return The account object if found.
	 */
	@RequestMapping(value = "/account/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> find(@PathVariable("id") final String id) {

		logger.info("UserController.find: id=" + id);

		User userResponse = this.service.findAccount(id);
		return new ResponseEntity<User>(userResponse, getNoCacheHeaders(), HttpStatus.OK);
	}


	/**
	 * REST call to save the account provided in the request body.
	 * 
	 * @param userRequest The account to save.
	 * @param builder
	 * @return
	 */
	@RequestMapping(value = "/account", method = RequestMethod.POST)
	public ResponseEntity<String> save(@RequestBody User userRequest, UriComponentsBuilder builder) {

		logger.debug("UserController.save: userId=" + userRequest.getId());

		Integer accountProfileId = this.service.saveUser(userRequest);
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.setLocation(builder.path("/account/{id}").buildAndExpand(accountProfileId).toUri());
		return new ResponseEntity<String>(responseHeaders, HttpStatus.CREATED);
	}

	/**
	 * REST call to decrease the balance in the account. Decreases the balance
	 * of the account if the new balance is not lower than zero. Returns HTTP OK
	 * and the new balance if the decrease was successful, or HTTP
	 * EXPECTATION_FAILED if the new balance would be negative and the
	 * old/current balance.
	 * 
	 * @param userId
	 *            The id of the account.
	 * @param amount
	 *            The amount to decrease the balance by.
	 * @param tradeId The id of the trade. 
	 *
	 * @return The new balance of the account with HTTP OK.
	 */
	@RequestMapping(value = "/accounts/{userId}/decreaseBalance/{amount}/trade/{tradeId}", method = RequestMethod.GET)
	public ResponseEntity<Double> decreaseBalance(@PathVariable("userId") final String userId, @PathVariable("amount") final double amount, @PathVariable("tradeId") final String tradeId) {

		logger.debug("UserController.decreaseBalance: id='" + userId + "', amount='" + amount + "'");

		User userResponse = this.service.findAccount(userId);
		//Trade currTrade = TradeService.getTradeById(tradeId);

		BigDecimal currentBalance = userResponse.getBalance();

		BigDecimal newBalance = currentBalance.subtract(new BigDecimal(amount));

		if (newBalance.compareTo(BigDecimal.ZERO) >= 0) {
			userResponse.setBalance(newBalance);
			this.service.saveUser(userResponse);
			return new ResponseEntity<Double>(userResponse.getBalance().doubleValue(), getNoCacheHeaders(), HttpStatus.OK);

		} else {
			// no sufficient founds available
			return new ResponseEntity<Double>(userResponse.getBalance().doubleValue(), getNoCacheHeaders(), HttpStatus.EXPECTATION_FAILED);
		}

	}

	/**
	 * REST call to increase the balance in the account. Increases the balance
	 * of the account if the amount is not negative. Returns HTTP OK and the new
	 * balance if the increase was successful, or HTTP EXPECTATION_FAILED if the
	 * amount given is negative.
	 * 
	 * @param userId
	 *            The id of the account.
	 * @param amount
	 *            The amount to increase the balance by.
	 * @return The new balance of the account with HTTP OK.
	 */
	@RequestMapping(value = "/accounts/{userId}/increaseBalance/{amount}", method = RequestMethod.GET)
	public ResponseEntity<Double> increaseBalance(@PathVariable("userId") final String userId, @PathVariable("amount") final double amount) {

		logger.debug("UserController.increaseBalance: id='" + userId + "', amount='" + amount + "'");

		User accountResponse = this.service.findAccount(userId);

		BigDecimal currentBalance = accountResponse.getBalance();

		logger.debug("UserController.increaseBalance: current balance='" + currentBalance + "'.");

		if (amount > 0) {

			BigDecimal newBalance = currentBalance.add(new BigDecimal(amount));
			logger.debug("UserController.increaseBalance: new balance='" + newBalance + "'.");

			accountResponse.setBalance(newBalance);
			this.service.saveUser(accountResponse);
			return new ResponseEntity<Double>(accountResponse.getBalance().doubleValue(), getNoCacheHeaders(), HttpStatus.OK);

		} else {
			// amount can not be negative for increaseBalance, please use
			// decreaseBalance
			return new ResponseEntity<Double>(accountResponse.getBalance().doubleValue(), getNoCacheHeaders(), HttpStatus.EXPECTATION_FAILED);
		}

	}

	private HttpHeaders getNoCacheHeaders() {
		HttpHeaders responseHeaders = new HttpHeaders();
		responseHeaders.set("Cache-Control", "no-cache");
		return responseHeaders;
	}
}
