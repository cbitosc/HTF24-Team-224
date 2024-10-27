import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const date = new Date(event.eventDate);
  const formattedDate = date.toLocaleDateString();
  return (
    <Link
      to={`/admin/event/${event.eventId}`}
      className="block p-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
    >
      <div className="mt-4">
        <h3 className="text-xl font-bold">{event.eventName}</h3>
        <p className="text-gray-600">{formattedDate}</p>
        <p className="text-gray-600">{event.clubName}</p>
      </div>
    </Link>
  );
};

const EventCard1 = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the event details page
    navigate(`/admin/pastevent/${event.eventId}`, { state: { event } });
  };
  const date = new Date(event.eventDate);
  const formattedDate = date.toLocaleDateString();

  return (
    <div
      onClick={handleClick}
      className="block p-4 rounded-lg shadow-lg hover:bg-gray-100 transition cursor-pointer"
    >
      <div className="mt-4">
        <h3 className="text-xl font-bold">{event.eventName}</h3>
        <p className="text-gray-600">{formattedDate}</p>
        <p className="text-gray-600">{event.clubName}</p>
      </div>
    </div>
  );
};

export { EventCard, EventCard1 };
