package com.jakemaxell.Open.Source.IT.Ticketing.System.controllers;

import com.jakemaxell.Open.Source.IT.Ticketing.System.models.Tickets.Ticket;
import com.jakemaxell.Open.Source.IT.Ticketing.System.services.TicketService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/ticket-api")
@CrossOrigin
public class TicketController {

    private TicketService ticketService;

    public TicketController(TicketService ticketService) {
        this.ticketService = ticketService;
    }

    // POST
    @PostMapping("/create-ticket")
    public ResponseEntity<String> createTicket(@RequestBody Ticket ticket){
        return ResponseEntity.ok().body(ticketService.createTicket(ticket));
    }

    // GET
    @GetMapping("get-ticket-by-id/{id}")
    public ResponseEntity<Optional<Ticket>> getTicketById(@PathVariable("id") String ticketId){
        return ResponseEntity.ok().body(ticketService.getTicketById(ticketId));
    }

}
