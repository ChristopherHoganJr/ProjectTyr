import React from "react";
import styled from "styled-components";

const HomeLanding = () => {
  return (
    <div>
      <StyledHome>
        <div className='container'>
          <StyledHomeLanding>
            <div className='text-start'>
              <StyledHomeLandingHeading>
                HWY 9 TIME ATTACK
              </StyledHomeLandingHeading>
              <StyledHomeLandingP>
                THE BIGGEST KING OF THE HILL EVENT IN THE SF BAY AREA.
              </StyledHomeLandingP>
              <button className='btn btn-success btn-lg'>View Event</button>
            </div>
          </StyledHomeLanding>
        </div>
      </StyledHome>
    </div>
  );
};

const StyledHome = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.squarespace-cdn.com/content/v1/5a8227a58fd4d2d73f0e95c4/1550018105210-0RDB6YCPR7IJ6RNRJVGA/Drift-Rides-030.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StyledHomeLanding = styled.div`
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-bottom: 10rem;
`;

const StyledHomeLandingHeading = styled.h2`
  font-size: 3rem;
`;

const StyledHomeLandingP = styled.p`
  font-size: 2rem;
`;

export default HomeLanding;
