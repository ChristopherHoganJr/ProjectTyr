import React from "react";
import styled from "styled-components";

const ClubFilterItem = () => {
  return (
    <StyledClubSliderItem>
      <StyledClubSliderItemImg
        src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
        alt=''
      />
    </StyledClubSliderItem>
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
