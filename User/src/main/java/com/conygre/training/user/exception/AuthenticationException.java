package com.conygre.training.user.exception;

/**
 * AuthenticationException should be thrown whenever a login attempt fails to
 * find the user

 */

@SuppressWarnings("serial")
public class AuthenticationException extends RuntimeException {

	public AuthenticationException(String message) {
		super(message);
	}
}