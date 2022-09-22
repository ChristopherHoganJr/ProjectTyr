import React from "react";

const ClubInfoTable = () => {
  return (
    <table className='table'>
      <tbody>
        <tr>
          <th scope='row'>
            <h4>Club Name:</h4>
          </th>
          <td>
            <h4>Fenrir</h4>
          </td>
        </tr>
        <tr>
          <th>
            <h4>Club Logo:</h4>
          </th>
          <td>
            <img
              src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
              alt=''
              style={{ width: "200px" }}
            />
          </td>
        </tr>
        <tr>
          <th>
            <h4>Year Founded:</h4>
          </th>
          <td>
            <h4>2022</h4>
          </td>
        </tr>
        <tr>
          <th colSpan='2'>
            <h4 className='text-center'>--- Car Requirements ---</h4>
          </th>
        </tr>
        <tr>
          <th>
            <h4>Car Make:</h4>
          </th>
          <td>
            <h4>Chevrolet</h4>
          </td>
        </tr>
        <tr>
          <th>
            <h4>Car Model:</h4>
          </th>
          <td>
            <h4>Camaro</h4>
          </td>
        </tr>
        <tr>
          <th>
            <h4>Year Range:</h4>
          </th>
          <td>
            <h4>All</h4>
          </td>
        </tr>
        <tr>
          <th>
            <h4>Engine Type:</h4>
          </th>
          <td>
            <h4>V8</h4>
          </td>
        </tr>
        <tr>
          <th>
            <h4>Transmission Type:</h4>
          </th>
          <td>
            <h4>All</h4>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default ClubInfoTable;
