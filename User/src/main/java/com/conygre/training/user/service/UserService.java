package com.conygre.training.user.service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import com.conygre.training.user.dao.UserMongoDao;
import com.conygre.training.user.exception.AuthenticationException;
import com.conygre.training.user.exception.NoRecordsFoundException;
import com.conygre.training.user.model.User;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.slf4j.Logger;
import org.springframework.stereotype.Service;

/**
 * User API
 *
 * @author Blair Gao
 * Template by David Ferreira Pinto
 */
@Service
public class UserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    /**
     * The User repository.
     */
    @Autowired
    UserMongoDao users;


    /**
     * Retrieve an account with given id. The id here is the unique user id
     * value of the account, ie the username.
     *
     * @param id The user id of the account.
     * @return The account object if found or throws a NoRecordsFoundException.
     */
    public User findAccount(String id) {

        logger.debug("UserService.findAccount: id=" + id);

        User account = users.findById(id);
        if (account == null) {
            logger.warn("UserService.findAccount: could not find account with id: " + id);
            throw new NoRecordsFoundException();
        }

        logger.info(String.format("UserService.findAccount - retrieved account with id: %s. Payload is: %s", id, account));

        return account;
    }


    /**
     * Saves the given account in the repository.
     *
     * @param userRequest The User to save.
     * @return the id of the User.
     */
    public Integer saveUser(User userRequest) {

        logger.debug("UserService.saveAccount:" + userRequest.toString());

        User user = users.save(userRequest);
        logger.info("UserService.saveAccount: account saved: " + user);
        return user.getId();
    }


}
