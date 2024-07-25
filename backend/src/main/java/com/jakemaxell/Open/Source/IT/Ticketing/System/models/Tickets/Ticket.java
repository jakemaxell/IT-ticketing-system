package com.jakemaxell.Open.Source.IT.Ticketing.System.models.Tickets;

import jakarta.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Document(collection = "Tickets")
public class Ticket {

    @Id
    private String id;
    private String firstName;
    private String lastName;
    private String email;
    private TicketType ticketType;
    private String description;
    private String submittedDate;
    private boolean completed;

    public Ticket() throws ParseException {
        LocalDate currentDate = LocalDate.now();

        this.id = UUID.randomUUID().toString();
        this.submittedDate = currentDate.format(DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        this.completed = false;
    }

    public String getId() {
        return id;
    }

    public TicketType getTicketType() {
        return ticketType;
    }

    public void setTicketType(TicketType ticketType) {
        this.ticketType = ticketType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSubmittedDate() {
        return submittedDate;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public void setSubmittedDate(String submittedDate) {
        this.submittedDate = submittedDate;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

}
