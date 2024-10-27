import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faClock,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({
  eventName,
  clubName,
  eventDate,
  startTime,
  endTime,
  eventLocation,
  eventid, // Add eventId prop for registration
}) => {
  const [isRegistered, setIsRegistered] = useState(false); // State to track registration status
  const admissionNo = localStorage.getItem("admissionNo"); // Get admission number from local storage

  const handleRegister = async () => {
    const registrationData = {
      eventId: eventid,
      admissionNo: admissionNo,
    };

    try {
      const response = await fetch("http://localhost:8080/events/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        // If registration is successful
        setIsRegistered(response.json()); // Update registration status
      } else {
        // Handle error if registration fails
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  const clubLogos = {
    PlacementOffice: "/flogos/PlacementLogo.png",
    Satarc: "/flogos/SATARClogo.jpg",
    // Add more mappings here for each club
  };

  // Select the logo based on club name, or a default logo if not found
  const clubLogo = clubLogos[clubName];

  return (
    <div className="w-3/5 mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mt-5 p-4 hover:scale-105 transition duration-500">
      <div className="flex">
        {/* Logo on the left occupying 1/4 of the card */}
        <div className="w-1/4 flex justify-center items-center">
          <img
            src={clubLogo} // Use the dynamically selected logo/ replace with your dynamic logo path if available
            alt="Club Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Event Details on the right */}
        <div className="ml-6 flex-grow">
          {/* Event Name */}
          <h2 className="text-xl font-bold text-gray-800">{eventName}</h2>

          {/* Club Name */}
          <h3 className="text-lg font-bold text-gray-800 mt-1">{clubName}</h3>

          {/* Event Details */}
          <div className="mt-2 space-y-1">
            <div className="flex items-center text-gray-600">
              <FontAwesomeIcon icon={faCalendar} className="h-5 w-5 mr-2" />
              <span>{eventDate}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FontAwesomeIcon icon={faClock} className="h-5 w-5 mr-2" />
              <span>
                {startTime}-{endTime}
              </span>
            </div>
            <div className="flex items-center text-gray-600">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5 mr-2" />
              <span>{eventLocation}</span>
            </div>
          </div>

          {/* Register Button */}
          <div className="mt-4">
            {isRegistered ? (
              <button className="w-full bg-gray-300 text-gray-500 font-semibold py-2 rounded cursor-not-allowed">
                Already Registered
              </button>
            ) : (
              <button
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-200"
                onClick={handleRegister} // Call handleRegister on button click
              >
                Register
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
