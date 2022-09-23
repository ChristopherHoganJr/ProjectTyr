import React, { useEffect, useState } from "react";
import axios from "axios";

const EventScrollItem = ({ event, setMapEvent, eventIdx }) => {
  const [club, setClub] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/carclub/${event.hostedBy}`)
      .then((res) => setClub(res.data))
      .catch((err) => console.log(err));
  }, []);

  const setMapData = (key) => {
    setMapEvent(key);
  };

  return (
    <div
      className='text-start border p-3'
      onClick={(e) => setMapData(eventIdx)}>
      <h3>{event.eventName}</h3>
      {club ? <h4>Hosted By: {club.clubName}</h4> : <h4>Hosted By: Loading</h4>}
      <h5>{event.meetAddress}</h5>
    </div>
  );
};

export default EventScrollItem;
