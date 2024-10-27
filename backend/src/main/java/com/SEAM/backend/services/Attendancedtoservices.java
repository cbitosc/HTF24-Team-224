package com.SEAM.backend.services;

import com.SEAM.backend.models.*;
import com.SEAM.backend.repo.*;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class Attendancedtoservices {

    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private UserRepo userRepo;

//    public List<UserEventModel> getUsersWithAttendance(String Event_ID) {
//        System.out.println(Event_ID);
//        Optional<Event> event = eventRepo.findById(Event_ID);
//        System.out.println(event);
//        if (event.isPresent()){
//            List<String> presentees = event.get().eventPresentees;
//            System.out.println(presentees);
//
//            List<UserEventModel> presenteesxl = new ArrayList<>();
//
//            for(String presentee: presentees){
//                System.out.println("check");
//                UserModel e=userRepo.findById(presentee).get();
//
//                UserEventModel u=new UserEventModel(e.username,e.roll_no,e.branch,e.semester);
//
//                presenteesxl.add(u);
//            }
//
//            return presenteesxl;
//        }
//        else {
//            List<UserEventModel> presenteesxl = new ArrayList<>();
//            return presenteesxl;
//        }
//
//    }

    public void createXL(HttpServletResponse response,String Event_ID) throws IOException {
        Optional<Event> event = eventRepo.findById(Event_ID);
        List<String> presentees;
        if (event.isPresent()){
            presentees = event.get().eventPresentees;
        }
        else {
            presentees = new ArrayList<String>();
        }

        Workbook workbook = new XSSFWorkbook();
        Sheet sheet = workbook.createSheet("Attendance");

        Row headerRow = sheet.createRow(0);
        String[] headers = {"Username","Roll_no","Branch","Semester"};
        for (int i = 0; i < headers.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(headers[i]);
        }

        int rowNum=1;
        for(String presente:presentees){
            UserModel stdInfo=userRepo.findById(presente).get();
            Row row = sheet.createRow(rowNum++);
            row.createCell(0).setCellValue(stdInfo.getUsername());
            row.createCell(1).setCellValue(stdInfo.getRoll_no());
            row.createCell(2).setCellValue(stdInfo.getBranch());
            row.createCell(3).setCellValue(stdInfo.getSemester());
        }
        response.setContentType("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
        response.setHeader("Content-Disposition", "attachment; filename=attendence.xlsx");

        workbook.write(response.getOutputStream());
        workbook.close();
    }
}

