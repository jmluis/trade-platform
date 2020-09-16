package com.conygre.training.user.dao;

import java.util.List;

import com.conygre.training.user.model.User;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserMongoDao extends MongoRepository<User, ObjectId> {

	public User findByIdAndPassword(String id, String password);
	public User findById(String id);
}