import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import EventScrollItem from "./EventScrollItem";

const EventScroll = ({ events }) => {
  return (
    <div>
      <h2>Event Scrolls</h2>
      <div className="d-flex flex-column gap-3 overflow-auto h-75">
        {events ? (
          events.map((event) => {
            return <EventScrollItem key={event._id} event={event} />;
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default EventScroll;
