# Hackathon – Spring Boot REST API for Trade Services 

This is a web application using Spring Boot. It holds a collection of **microservices** that work together to present a trading platform though a web UI. We build it in a way that allows us to be ale to add on more features in the future. 

## Architecture
The application combines four microservices. 
![architecture](/docs/arch.png)

## 1. Stock Microservice
This is a spring boot application which is responsible for providing ticker. 
This RESTful API contains:
* ``getQuotes(sym)``
Returns the current Bid–ask spread for the input stock (ticker symbol).
* ``getInfo(sym)``
Returns a list of most recent trade for the input stock (ticker symbol).


## 2. User Microservice
This is a spring boot application which is responsible for creating and managing users. We stores the user accounts in a MongoDB.
This RESTful API contains:

* ``getUser(userID)``
Returns the User. Each user contains a unique user ID, account balance, and trade history.
* ``postTrade(userID, Trade)``
This post a new trade for the user. 


## 3. Trade Microservice
This is a spring boot application that is responsible for handling trades. This service accepts orders (both BUY and SELL) and stores the trades in MongoDB. It implemented the CRUD operations for trades. 

**Users** get the most up to date stock price from **Stock**, and send actions to **Trade**. 

It is also where filling of the orders happens. A trade can have four status: **Created, Processing, Filled, or Rejected. 


## 4. Web Microservice
