import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// components
import ClubInfoTable from "../components/CarClubs/ClubInfoTable";
import ClubInfoPictures from "../components/CarClubs/ClubInfoPictures";

const SingleClubPage = () => {
  const { id } = useParams();
  const [carClub, setCarClub] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/carclub/${id}`)
      .then((res) => setCarClub(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <ClubInfoTable carClub={carClub} />
      <ClubInfoPictures />
    </div>
  );
};

export default SingleClubPage;
