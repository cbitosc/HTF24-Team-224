package com.SEAM.backend.controllers;

import com.SEAM.backend.models.Event;
import com.SEAM.backend.services.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
@CrossOrigin
public class AttendanceController {

    @Autowired
    private AttendanceServices attendanceService;

    @PutMapping("/{eventId}/presentees")
    public Event updateEventPresentees(@PathVariable String eventId, @RequestBody String presentee) {
        return attendanceService.updateEventPresentees(eventId, presentee);
    }
}
