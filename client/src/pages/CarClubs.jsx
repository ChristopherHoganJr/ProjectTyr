import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

// components
import ClubTypeSelector from "../components/CarClubs/ClubTypeSelector";
import ClubFilterItem from "../components/CarClubs/ClubFIlterItem";

const CarClubs = () => {
  const [carClubs, setCarClubs] = useState(null);
  const [clubFilter, setClubFilter] = useState(false);

  // let ilter = carClubs.filter((club) => club.clubType.inclues(""));
  const filterClubs = (filterType) => {
    carClubs.filter((club) => club.clubType.inclues(`${filterType}`));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/carclub/`)
      .then((res) => setCarClubs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className='pt-4'>
        <div className='container'>
          <div className='row h-50'>
            <div className='col d-flex'>
              <ClubTypeSelector setClubFilter={setClubFilter} />
            </div>
          </div>
          <div className='row h-50 mt-5'>
            <div className='col d-flex flex-wrap gap-3 justify-content-center'>
              {carClubs ? (
                carClubs.map((carClub) => {
                  return <ClubFilterItem key={carClub._id} carClub={carClub} />;
                })
              ) : (
                <p>Loading</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarClubs;
