package com.jakemaxell.Open.Source.IT.Ticketing.System;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class OpenSourceItTicketingSystemApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(OpenSourceItTickeetingSystemApplication.class, args);
	}

}
