package com.jakemaxell.Open.Source.IT.Ticketing.System.repository;

import com.jakemaxell.Open.Source.IT.Ticketing.System.models.Users.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
