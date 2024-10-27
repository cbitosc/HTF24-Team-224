import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFileAlt, FaDownload } from "react-icons/fa";

const AdminEventDetails = () => {
  const location = useLocation();
  const { event } = location.state || {}; // Retrieve the event data from state

  if (!event) {
    return <div className="p-4">No event data available</div>;
  }

  const {
    eventName,
    eventDate,
    clubName,
    startTime,
    endTime,
    eventDescription,
    eventId, // Make sure eventId is available
  } = event;

  const date = new Date(eventDate);
  const formattedDate = date.toLocaleDateString();

  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(hours, minutes);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formattedStartTime = formatTime(startTime);
  const formattedEndTime = formatTime(endTime);

  // Settings for the photo slider (if you plan to use it)
  const sliderSettings = {
    // Your slider settings here
  };

  const baseUrl = "http://localhost:8080"; // Base URL of your backend
  const downloadDocumentUrl = `${baseUrl}/download/${eventId}`;

  const handleDownload = async () => {
    try {
      const response = await fetch(downloadDocumentUrl, {
        method: "GET",
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch the document");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "attendance_document.xlsx"; // Filename for the downloaded file
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading document:", error);
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold mb-4 text-center">{eventName}</h1>

      <div className="space-y-4">
        <div className="flex flex-col items-start">
          <p className="text-xl">
            <span className="font-semibold">Date:</span> {formattedDate}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Start Time:</span>{" "}
            {formattedStartTime}
          </p>
          <p className="text-xl">
            <span className="font-semibold">End Time:</span> {formattedEndTime}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Club:</span> {clubName}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Description:</span>{" "}
            {eventDescription}
          </p>
        </div>

        {/* Uncomment this section if you have photos */}
        {/* {photos && photos.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Event Photos</h2>
            <Slider {...sliderSettings}>
              {photos.map((photo, index) => (
                <div key={index} className="w-full h-64">
                  <img
                    src={photo}
                    alt={`Event Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        )} */}

        <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-semibold">Attendance</h2>
          <div className="flex flex-col space-y-2">
            {/* <a
              href={viewDocumentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 transition text-lg"
            >
              <FaFileAlt className="mr-2 text-xl" />
              View Attendance Document
            </a> */}
            <button
              onClick={handleDownload}
              className="flex items-center text-blue-600 hover:text-blue-800 transition text-lg bg-transparent border-none cursor-pointer"
            >
              <FaDownload className="mr-2 text-xl" />
              Download Attendance Document
            </button>

            <div className="mt-6">
              <Link
                to={{
                  pathname: `/admin/${clubName}/analytics/${eventId}`,
                }}
                className="text-blue-600 hover:text-blue-800 transition text-lg"
              >
                View Analytics Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEventDetails;
