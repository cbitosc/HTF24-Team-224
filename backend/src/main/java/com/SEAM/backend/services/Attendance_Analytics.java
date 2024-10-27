package com.SEAM.backend.services;

import com.SEAM.backend.models.UserEventModel;
import com.SEAM.backend.models.Event;
import com.SEAM.backend.models.UserModel;
import com.SEAM.backend.repo.EventRepo;
import com.SEAM.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class Attendance_Analytics {

    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private UserRepo userRepo;

    public List<UserEventModel> getAllAttendanceData(String eventId) {
        Optional<Event> event = eventRepo.findById(eventId);
        List<UserEventModel> attendanceData = new ArrayList<>();

        if (event.isPresent()) {
            List<String> presentees = event.get().getEventPresentees();

            for (String presenteeId : presentees) {
                Optional<UserModel> userOptional = userRepo.findById(presenteeId);
                if (userOptional.isPresent()) {
                    UserModel user = userOptional.get();
                    attendanceData.add(new UserEventModel(user.getUsername(), user.getRoll_no(), user.getBranch(), user.getSemester()));
                }
            }
        }
        return attendanceData;
    }
}
