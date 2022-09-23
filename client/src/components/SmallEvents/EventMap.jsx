import React from "react";

const EventMap = ({ mapEvent, smallEvents }) => {
  console.log(mapEvent);
  return (
    <div className=''>
      <h2>Event Map</h2>
      <iframe
        src={smallEvents[mapEvent].meetLocation}
        width='600'
        height='450'
        loading='lazy'></iframe>
    </div>
  );
};

export default EventMap;
