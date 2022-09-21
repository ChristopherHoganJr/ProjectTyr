import React from "react";

// components
import ClubTypeSelector from "../components/CarClubs/ClubTypeSelector";

const CarClubs = () => {
  return (
    <>
      <div className='pt-4'>
        <div className='container'>
          <div className='row h-50'>
            <div className='col d-flex'>
              <ClubTypeSelector />
              <div className='w-75 h-100 bg-light d-flex gap-3 overflow-auto'>
                <div className={styles.clubSliderCard}>
                  <img
                    src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                    alt=''
                    className={styles.clubImgSelector}
                  />
                </div>
                <div className={styles.clubSliderCard}>
                  <img
                    src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                    alt=''
                    className={styles.clubImgSelector}
                  />
                </div>
                <div className={styles.clubSliderCard}>
                  <img
                    src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                    alt=''
                    className={styles.clubImgSelector}
                  />
                </div>
                <div className={styles.clubSliderCard}>
                  <img
                    src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                    alt=''
                    className={styles.clubImgSelector}
                  />
                </div>
                <div className={styles.clubSliderCard}>
                  <img
                    src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                    alt=''
                    className={styles.clubImgSelector}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row h-50 mt-5'>
            <div className='col'>
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
                        className={styles.clubImgSelector}
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
            </div>
            <div className='col'>
              <div className='d-flex justify-content-start align-items-center'>
                <h2>Next Meet</h2>
                <h4 className='ms-3'>
                  <a href='#'>Fenrir Monthly Meet</a>
                </h4>
              </div>
              <div>
                <h2>About Fenrir</h2>
                <p>
                  Integer pretium, mi vitae luctus sagittis, ipsum mauris
                  eleifend odio, egestas eleifend dolor ante id nunc. Aenean et
                  lobortis justo, id pretium arcu. Curabitur sit amet vestibulum
                  quam, non fermentum dui. Nulla vel velit in eros pretium
                  sodales et in eros. Duis metus leo, interdum a tortor sit
                  amet, congue molestie ante. Suspendisse potenti. Aliquam
                  fermentum sapien sit amet nisi tempus, vel lacinia massa
                  suscipit. Vestibulum eleifend mi vitae nisl pharetra, sed
                  scelerisque velit rutrum. Mauris tempor felis eget urna
                  sollicitudin elementum. Etiam scelerisque, erat ut rutrum
                  tempor, urna justo pretium enim, eu tincidunt mi nunc eget
                  justo.
                </p>
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='col'>
              <h3 className='text-center'>Club Pictures</h3>
              <div className='d-flex flex-wrap gap-3'>
                <img
                  src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                  alt=''
                  className={styles.clubImgSelector}
                />
                <img
                  src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                  alt=''
                  className={styles.clubImgSelector}
                />
                <img
                  src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                  alt=''
                  className={styles.clubImgSelector}
                />
                <img
                  src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                  alt=''
                  className={styles.clubImgSelector}
                />
                <img
                  src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                  alt=''
                  className={styles.clubImgSelector}
                />
                <img
                  src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                  alt=''
                  className={styles.clubImgSelector}
                />
                <img
                  src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                  alt=''
                  className={styles.clubImgSelector}
                />
                <img
                  src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                  alt=''
                  className={styles.clubImgSelector}
                />
                <img
                  src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                  alt=''
                  className={styles.clubImgSelector}
                />
                <img
                  src='https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2015/03/Camaro_Six_Badge-626x382.jpg'
                  alt=''
                  className={styles.clubImgSelector}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarClubs;
