import React, { useState } from "react";

const ClubTypeSelector = ({ setClubFilter, clubFilter }) => {
  const [muscleCars, setMuscleCars] = useState(false);
  const [importCars, setImportCars] = useState(false);

  const changeType = (clubType) => {
    if (clubType === "Muscle" && clubFilter !== "Muscle") {
      setMuscleCars(true);
      setClubFilter("Muscle");
      setImportCars(false);
    } else if (clubType === "Import" && clubFilter !== "Import") {
      setImportCars(true);
      setClubFilter("Import");
      setMuscleCars(false);
    } else {
      setMuscleCars(false);
      setImportCars(false);
      setClubFilter("");
    }
  };

  console.log("muscle", muscleCars);
  console.log("import", importCars);

  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-start gap-3">
      <h1 className="p-2 border">Club Types</h1>
      <div>
        <input
          type="checkbox"
          name=""
          id=""
          className="me-2 "
          checked={muscleCars}
          onChange={() => changeType("Muscle")}
        />
        <label htmlFor="">
          <h4>Muscle</h4>
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          name=""
          id=""
          className="me-2"
          checked={importCars}
          onChange={() => changeType("Import")}
        />
        <label htmlFor="">
          <h4>Import</h4>
        </label>
      </div>
    </div>
  );
};

export default ClubTypeSelector;
