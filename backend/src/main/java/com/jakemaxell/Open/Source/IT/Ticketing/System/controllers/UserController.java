package com.jakemaxell.Open.Source.IT.Ticketing.System.controllers;

import com.jakemaxell.Open.Source.IT.Ticketing.System.dtos.LoginDto;
import com.jakemaxell.Open.Source.IT.Ticketing.System.models.Users.User;
import com.jakemaxell.Open.Source.IT.Ticketing.System.services.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-api")
@CrossOrigin
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // POST
    @PostMapping("/create-user")
    public ResponseEntity<String> createUser(@RequestBody User user){
        return ResponseEntity.ok().body(userService.createUser(user));
    }

    @PostMapping("/find-user-by-username")
    public ResponseEntity<User> findUserByUsername(@RequestBody LoginDto loginDto){
        User user = userService.findUserByUsername(loginDto.getUsername(), loginDto.getPassword());
        if(user != null){
            return ResponseEntity.ok().body(user);
        }
        
        return ResponseEntity.notFound().build();
    }

}
