import React, { useState } from "react";

const EventForm = () => {
  const [eventId, seteventId] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [clubName, setClubName] = useState("");
  const [eventPresentees, seteventPresentees] = useState([]);
  const [registered, setRegistered] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (
      !eventId ||
      !eventName ||
      !eventDescription ||
      !eventDate ||
      !startTime ||
      !endTime ||
      !eventLocation ||
      !clubName
    ) {
      setError("All fields are required.");
      return;
    }

    // Data to be sent to the backend
    const eventData = {
      eventId,
      eventName,
      eventDescription,
      eventDate,
      startTime,
      endTime,
      eventLocation,
      clubName,
      eventPresentees,
      registered,
    };

    try {
      const response = await fetch("http://localhost:8080/events/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (response.ok) {
        const result = await response.json();
        setSuccess("Event created successfully!");
        console.log("Success:", result);
        // Optionally reset the form
        seteventId("");
        setEventName("");
        setEventDescription("");
        setEventDate("");
        setStartTime("");
        setEndTime("");
        setEventLocation("");
        setClubName("");
      } else {
        setError("Failed to create event. Please try again.");
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 p-4 sm:p-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl sm:text-2xl font-semibold text-purple-600 mb-4 text-center">
          Create Event
        </h2>
        {error && (
          <p className="text-red-600 text-sm mb-4 text-center">{error}</p>
        )}
        {success && (
          <p className="text-green-600 text-sm mb-4 text-center">{success}</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="eventId"
            >
              Event Id
            </label>
            <input
              type="text"
              id="eventId"
              value={eventId}
              onChange={(e) => seteventId(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter eventId"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="eventName"
            >
              Event Name
            </label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter event name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="eventDescription"
            >
              Event Description
            </label>
            <textarea
              id="eventDescription"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter event description"
              rows="3"
              required
            />
          </div>
          <div className="mb-4 flex flex-col sm:flex-row sm:space-x-4">
            <div className="flex-1 mb-4 sm:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="eventDate"
              >
                Date
              </label>
              <input
                type="date"
                id="eventDate"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col sm:flex-row sm:space-x-4">
            <div className="flex-1 mb-4 sm:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="startTime"
              >
                Start Time
              </label>
              <input
                type="time"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="endTime"
              >
                End Time
              </label>
              <input
                type="time"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="clubName"
            >
              Club Name
            </label>
            <input
              type="text"
              id="clubName"
              value={clubName}
              onChange={(e) => setClubName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter club name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="eventLocation"
            >
              Location
            </label>
            <input
              type="text"
              id="eventLocation"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter event location"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
