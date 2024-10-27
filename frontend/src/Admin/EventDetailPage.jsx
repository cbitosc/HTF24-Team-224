import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa"; // Import the camera icon

const EventDetailPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`http://localhost:8080/${eventId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch event");
        }
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  const handlePostAttendance = () => {
    navigate(`/admin/scan-attendance/${eventId}`);
  };

  if (loading) {
    return <p>Loading event details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!event) {
    return <p>No event data available</p>;
  }
  const formatTime = (timeString) => {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(hours, minutes);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const formattedStartTime = formatTime(event.startTime);
  const formattedEndTime = formatTime(event.endTime);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mt-4">{event.eventName}</h2>
      <p className="text-gray-600">
        {formattedStartTime} | {formattedEndTime}
      </p>
      <p className="text-gray-600">{event.clubName}</p>
      <p className="mt-4">{event.eventDescription}</p>

      {/* Post Attendance Button */}
      <button
        onClick={handlePostAttendance}
        className="mt-8 p-4 bg-purple-600 text-white rounded-lg flex items-center space-x-4 hover:bg-purple-700 transition"
      >
        <FaCamera className="text-2xl" />
        <span className="text-lg font-semibold">Post Attendance</span>
      </button>
    </div>
  );
};

export default EventDetailPage;
