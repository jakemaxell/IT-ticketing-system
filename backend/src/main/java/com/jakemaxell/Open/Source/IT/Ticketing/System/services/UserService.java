package com.jakemaxell.Open.Source.IT.Ticketing.System.services;

import com.jakemaxell.Open.Source.IT.Ticketing.System.models.Users.User;
import com.jakemaxell.Open.Source.IT.Ticketing.System.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // POST
    public String createUser(User user){
        try {
            userRepository.save(user);
        } catch (Exception exception){
            return exception.getMessage();
        }
        return user.getId();
    }

}
