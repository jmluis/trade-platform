package com.conygre.training.stocksimulator.exception;

/**
 * Exception representing that a quote symbol cannot be found.
 * @author David Ferreira Pinto
 *
 */
public class SymbolNotFoundException extends Exception {
	static final long serialVersionUID = 123456789L;

	public SymbolNotFoundException(String message ) {
		super(message);
	}
}
