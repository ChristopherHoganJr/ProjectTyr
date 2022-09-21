import React from "react";

const ClubTypeSelector = () => {
  return (
    <div className='w-25 h-100'>
      <h1>Club Types</h1>
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
