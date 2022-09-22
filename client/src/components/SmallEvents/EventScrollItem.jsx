import React, { useEffect, useState } from "react";
import axios from "axios";

const EventScrollItem = ({ event }) => {
  const [club, setClub] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/carclub/${event.hostedBy}`)
      .then((res) => setClub(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-start border p-3">
      <h2>Meet Name: {event.eventName}</h2>
      {club ? <h3>Hosted By: {club.clubName}</h3> : <h3>Loading</h3>}
      <h4>Address: {event.meetAddress}</h4>
    </div>
  );
};

export default EventScrollItem;
