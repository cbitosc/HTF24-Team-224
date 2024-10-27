package com.SEAM.backend.services;

import com.SEAM.backend.models.Event;
import com.SEAM.backend.repo.EventRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AttendanceServices {

    @Autowired
    private EventRepo eventRepo;

    public Event updateEventPresentees(String eventId, String presentee) {
        Optional<Event> optionalEvent = eventRepo.findById(eventId);

        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            event.eventPresentees.add(presentee);
            return eventRepo.save(event);
        } else {
            throw new RuntimeException("Event not found with id: " + eventId);
        }
    }
}
