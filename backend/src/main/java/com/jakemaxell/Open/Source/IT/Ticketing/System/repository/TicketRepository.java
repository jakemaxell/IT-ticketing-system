package com.jakemaxell.Open.Source.IT.Ticketing.System.repository;

import com.jakemaxell.Open.Source.IT.Ticketing.System.models.Tickets.Ticket;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends MongoRepository<Ticket, String> {

}
