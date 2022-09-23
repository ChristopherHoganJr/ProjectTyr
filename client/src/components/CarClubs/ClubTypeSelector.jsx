import React, { useState } from "react";

const ClubTypeSelector = ({ setClubFilter }) => {
  const [muscleCars, setMuscleCars] = useState(false);
  const [importCars, setImportCars] = useState(false);

  return (
    <div className='w-100 h-100 d-flex align-items-center justify-content-start gap-3'>
      <h1 className='p-2 border'>Club Types</h1>
      <div>
        <input type='checkbox' name='' id='' className='me-2' />
        <label htmlFor=''>
          <h4>Muscle</h4>
        </label>
      </div>
      <div>
        <input type='checkbox' name='' id='' className='me-2' />
        <label htmlFor=''>
          <h4>Import</h4>
        </label>
      </div>
      <div>
        <input type='checkbox' name='' id='' className='me-2' />
        <label htmlFor=''>
          <h4>Time Attack</h4>
        </label>
      </div>
      <div>
        <input type='checkbox' name='' id='' className='me-2' />
        <label htmlFor=''>
          <h4>Cruising</h4>
        </label>
      </div>
      <div>
        <input type='checkbox' name='' id='' className='me-2' />
        <label htmlFor=''>
          <h4>Drift</h4>
        </label>
      </div>
    </div>
  );
};

export default ClubTypeSelector;
