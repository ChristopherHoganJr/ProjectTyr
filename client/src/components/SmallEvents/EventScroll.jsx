import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import EventScrollItem from "./EventScrollItem";

const EventScroll = ({ events, setMapEvent }) => {
  return (
    <div>
      <h2>Event Scrolls</h2>
      <div className='d-flex flex-column gap-3 overflow-auto h-75'>
        {events ? (
          events.map((event, idx) => {
            return (
              <EventScrollItem
                key={event._id}
                eventIdx={idx}
                event={event}
                setMapEvent={setMapEvent}
              />
            );
          })
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

export default EventScroll;
