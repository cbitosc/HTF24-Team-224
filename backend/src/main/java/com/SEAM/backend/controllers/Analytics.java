package com.SEAM.backend.controllers;

import com.SEAM.backend.models.UserEventModel;
import com.SEAM.backend.services.Attendance_Analytics;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/{clubName}/analytics")
public class Analytics {

    @Autowired
    private Attendance_Analytics attendance_analytics;

    @GetMapping("/{eventId}")
    public List<UserEventModel> getAttendanceData(@PathVariable String eventId) {
        return attendance_analytics.getAllAttendanceData(eventId);
    }
}
