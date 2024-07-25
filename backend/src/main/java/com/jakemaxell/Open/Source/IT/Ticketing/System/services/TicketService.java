package com.jakemaxell.Open.Source.IT.Ticketing.System.services;

import com.jakemaxell.Open.Source.IT.Ticketing.System.models.Tickets.Ticket;
import com.jakemaxell.Open.Source.IT.Ticketing.System.models.Users.User;
import com.jakemaxell.Open.Source.IT.Ticketing.System.repository.TicketRepository;
import com.jakemaxell.Open.Source.IT.Ticketing.System.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TicketService {

    private final TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }


    // POST
    public String createTicket(Ticket ticket){
        try{
            ticketRepository.save(ticket);
        } catch (Exception exception){
            return exception.getMessage();
        }
        return ticket.getId();
    }

    // GET
    public Optional<Ticket> getTicketById(String ticketId){
        return ticketRepository.findById(ticketId);
    }

}
