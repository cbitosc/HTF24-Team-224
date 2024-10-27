package com.SEAM.backend.models;



import java.time.LocalTime;
import java.util.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Data
@AllArgsConstructor
public class UserEventModel {
    private String username;
    private String roll_no;
    private String branch;
    private int semester;
    // private String clubName;
    // private String eventName;
    // private Date eventDate;
    // private LocalTime startTime;
    // private LocalTime endTime;
    // private String eventLocation; 
}