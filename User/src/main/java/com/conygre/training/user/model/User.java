package com.conygre.training.user.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import com.conygre.spring.SpringRESTApi.entities.Trade;
/**
 * Entity object that represents a user account.
 * @author Blair Gao
 */

public class User implements Serializable {

    private static final long serialVersionUID = -3057275461420965784L;

    private Integer id;
    private String password;
    private String email;
    private String name;
    private BigDecimal balance;
    // Add the list of trades
    private ArrayList<Trade> tradeHistory;

    public User(){
        balance = new BigDecimal("1000000");
        tradeHistory = new ArrayList<Trade>();
    }
    public User(Integer id, String password, String email, String name){
        this.id = id;
        this.password = password;
        this.email = email;
        this.name = name;
        this.balance = new BigDecimal("1000000");
        this.tradeHistory = new ArrayList<Trade>();
    }

    public ArrayList<Trade> getTradeHistory(){
        return tradeHistory;
    }
    public void setTradeHistory(ArrayList<Trade> tradeHistory){
        this.tradeHistory = tradeHistory;
    }

    public BigDecimal getBalance() {
        return balance;
    }

    public void setBalance(BigDecimal balance) {
        this.balance = balance;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("User [id=").append(id).append(", passwd=").append("PASSWD OMMITED")
                .append(", email=").append(email)
                .append(", name=").append(name)
                .append(", balance=").append(balance).append("]");
        return builder.toString();
    }


}
