package com.conygre.spring.SpringRESTApi;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@ComponentScan
@EnableMongoRepositories(basePackages = "com.conygre.spring.SpringRESTApi.data")
public class MongoJavaConfig extends AbstractMongoClientConfiguration {

    @Override
    protected String getDatabaseName() {
        return "mydatabase";
    }
}