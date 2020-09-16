package com.conygre.spring.SpringRESTApi.Exceptions;


public class ResourceNotFoundException extends RuntimeException{

    public ResourceNotFoundException(String exception){
        super(exception);
    }

}