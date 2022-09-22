import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ClubFilterItem = ({ carClub }) => {
  return (
    <Link to={`/carclubs/${carClub._id}`}>
      <StyledClubSliderItem>
        <StyledClubSliderItemImg
          src={carClub.clubLogo}
          alt={`${carClub.clubName} logo`}
        />
      </StyledClubSliderItem>
    </Link>
  );
};

const StyledClubSliderItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 225px;
  height: 100%;
  background-color: blue;
`;

const StyledClubSliderItemImg = styled.img`
  width: 200px;
`;

export default ClubFilterItem;
