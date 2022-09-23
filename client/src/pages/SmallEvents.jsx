import React, { useEffect, useState } from "react";
import axios from "axios";

// components
import EventScroll from "../components/SmallEvents/EventScroll";
import EventMap from "../components/SmallEvents/EventMap";
import EventAbout from "../components/SmallEvents/EventAbout";

const SmallEvents = () => {
  const [smallEvents, setSmallEvents] = useState(null);
  const [mapEvent, setMapEvent] = useState(0);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/smallevent/`)
      .then((res) => setSmallEvents(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(smallEvents);

  return (
    <div className='mt-3'>
      <div className='container'>
        <h1>Events</h1>
        <div className='row'>
          <div className='col'>
            <EventScroll events={smallEvents} setMapEvent={setMapEvent} />
          </div>
          <div className='col'>
            <EventMap mapEvent={mapEvent} smallEvents={smallEvents} />
            <EventAbout />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallEvents;
