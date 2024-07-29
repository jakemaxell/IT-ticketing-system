package com.jakemaxell.Open.Source.IT.Ticketing.System.models.Users;

public class UserSearchCriteria {

    private String username;
    private String password;

    public UserSearchCriteria(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
