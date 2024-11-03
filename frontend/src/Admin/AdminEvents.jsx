import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the clubname from the URL
import { EventCard1 } from "./Eventcard"; // Assuming EventCard1 is the correct import for displaying events

const AdminEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { clubname } = useParams(); // Assuming the clubname is passed as a URL parameter

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/pastEventsByClub/${clubname}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [clubname]);

  // Helper function to group events by year and month
  console.log("events:", events);
  const groupEventsByMonth = (events) => {
    return events.reduce((acc, event) => {
      const date = new Date(event.eventDate);
      const year = date.getFullYear();
      const month = date.toLocaleString("default", { month: "long" });

      if (!acc[year]) acc[year] = {};
      if (!acc[year][month]) acc[year][month] = [];

      acc[year][month].push(event);

      return acc;
    }, {});
  };

  const groupedEvents = groupEventsByMonth(events);
  console.log(groupedEvents);

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Your Past Events</h2>
      {Object.entries(groupedEvents).map(([year, months]) => (
        <div key={year} className="space-y-4">
          <h3 className="text-xl font-semibold">{year}</h3>
          {Object.entries(months).map(([month, events]) => (
            <div key={month} className="space-y-2">
              <h4 className="text-lg font-semibold">{month}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map((event) => (
                  <EventCard1 key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminEvents;
