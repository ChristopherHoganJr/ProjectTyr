import React from "react";
import styled from "styled-components";

// components
import ClubTypeSelector from "../components/CarClubs/ClubTypeSelector";
import ClubFilterItem from "../components/CarClubs/ClubFIlterItem";

const CarClubs = () => {
  return (
    <>
      <div className='pt-4'>
        <div className='container'>
          <div className='row h-50'>
            <div className='col d-flex'>
              <ClubTypeSelector />
            </div>
          </div>
          <div className='row h-50 mt-5'>
            <div className='col d-flex flex-wrap gap-3 justify-content-center'>
              <ClubFilterItem />
              <ClubFilterItem />
              <ClubFilterItem />
              <ClubFilterItem />
              <ClubFilterItem />
              <ClubFilterItem />
              <ClubFilterItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarClubs;
