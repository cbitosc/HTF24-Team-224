import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useParams,
} from "react-router-dom";
import {
  FaTachometerAlt,
  FaPenNib,
  FaPalette,
  FaIcons,
  FaBook,
  FaBars,
  FaSignOutAlt,
  FaPlus,
} from "react-icons/fa";
// Importing Card component for event cards
import Card from "./eventcard";
import UserEvent from "./userevents";
import Allclubs from "./allclubs";
import Userattendancepage from "./userattendance";
// Main Admind Component
const Admind = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const [futureEvents, setFutureEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Assume clubname is passed as a URL parameter

  useEffect(() => {
    console.log("hh");
    const admissionNo = localStorage.getItem("admissionNo");
    const fetchFutureEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/events/futureEvents/${admissionNo}`
        );
        console.log(response);
        const data = await response.json();
        console.log("data", data);
        setFutureEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFutureEvents();
  }, []);

  if (loading) return <p>Loading future events...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-white shadow flex items-center justify-between p-4 w-full">
        <div className="flex items-center space-x-2">
          <FaBars className="cursor-pointer md:w-130" onClick={toggleSidebar} />
          <img
            src="/flogos/logo.jpg"
            alt="Logo"
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
          <div className="text-xl sm:text-2xl font-bold">
            Student Event Attendance Management
          </div>
        </div>
        <button className="flex items-center space-x-2 text-red-600">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`bg-gray-100 p-4 space-y-6 transition-all duration-300 ${
            isSidebarOpen ? "block" : "hidden"
          } w-full sm:w-64 flex-shrink-0`}
        >
          <nav>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/user/home"
                  className="flex items-center space-x-2 text-purple-700 font-bold hover:bg-purple-200 rounded-lg p-2"
                >
                  <FaTachometerAlt />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li className="text-sm uppercase text-gray-500">Utilities</li>
              <li>
                <Link
                  to="/user/myevent"
                  className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2"
                >
                  <FaPenNib />
                  <span>My Events</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/user/Allclubs"
                  className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2"
                >
                  <FaPalette />
                  <span>Clubs</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/user/attendance"
                  className="flex items-center space-x-2 hover:bg-gray-200 rounded-lg p-2"
                >
                  <FaBook />
                  <span>Attendance</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        {/* Main Content */}
        <div className="flex-1">
          <main className="flex-1 p-4 space-y-4">
            <Routes>
              <Route
                path="/home"
                element={
                  <div>
                    {futureEvents.map((event) => (
                      <Card
                        key={event.id}
                        eventName={event.eventName}
                        clubName={event.clubName}
                        eventDate={event.eventDate}
                        startTime={event.startTime}
                        endTime={event.endTime}
                        eventLocation={event.eventLocation}
                        eventid={event.eventId}
                      />
                    ))}
                  </div>
                }
              />
              <Route path="/myevent" element={<UserEvent />} />
              <Route path="/Allclubs" element={<Allclubs />} />
              <Route path="/attendance" element={<Userattendancepage />} />
              {/* <Route path="/samplepage" element={<SamplePage />} /> */}
              {/* Add other routes here */}
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export { Admind };
