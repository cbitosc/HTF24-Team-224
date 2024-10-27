import { useState } from "react";
// import "./App.css";
import Hero from "./Admin/Hero";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Admin/Register"; // Assuming SignupForm is the Register component
import Eventcreation from "./Admin/EventRegistration"; // Create or import your Login component
import Admind from "./Admin/Home";
import EventDetailPage from "./Admin/EventDetailPage";
import AdminEventDetails from "./Admin/AdminEventDetails";
import AdminEvents from "./Admin/AdminEvents";
import ScanAttendancePage from "./Admin/ScanAttendance";
import MainPage from "./MainPage";
import AdminLogin from "./Admin/AdminLogin";
import EventForm from "./Admin/EventRegistration";
import AttendanceAnalytics from "./Admin/Analytics_dashboard";

const Admin = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/eventcreation" element={<EventForm />} />
        <Route path="/event/:eventId" element={<EventDetailPage />} />
        <Route path="/pastevent/:eventId" element={<AdminEventDetails />} />
        <Route
          path="/scan-attendance/:eventId"
          element={<ScanAttendancePage />}
        />
        <Route
          path="/:clubName/analytics/:eventId"
          element={<AttendanceAnalytics />}
        />
        <Route path="/adminet/:clubname" element={<AdminEvents />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/:clubname/*" element={<Admind />} />
      </Routes>
    </div>
  );
};

export default Admin;
