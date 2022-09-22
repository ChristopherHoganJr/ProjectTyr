import React from "react";

const ClubInfoTable = ({ carClub }) => {
  console.log(carClub);
  return (
    <div className="container">
      <h1>{carClub.clubName}</h1>
      <img
        src={carClub.clubLogo}
        alt={`${carClub.clubName} logo`}
        style={{ width: "300px" }}
      />
      <h4>Year Founded: {carClub.yearFounded}</h4>
      <h4 className="text-center">--- Car Requirements ---</h4>
      <h4>Car Make: {carClub.carMake}</h4>
      <h4>Car Model: {carClub.carModel}</h4>
      <h4>Year Range: {carClub.yearRange}</h4>
      <h4>Engine Type: {carClub.engineType}</h4>
      <h4>Transmission Type: {carClub.transmissionType}</h4>
    </div>
  );
};

export default ClubInfoTable;
