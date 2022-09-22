import React from "react";

const EventMap = () => {
  return (
    <div className="">
      <h2>Event Map</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22906.374311064585!2d-121.94649193273773!3d37.421046312266526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc817b6524729%3A0xc76fe98238f2fdad!2sAlviso%20Marina%20County%20Park!5e0!3m2!1sen!2sus!4v1663881555318!5m2!1sen!2sus"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default EventMap;
