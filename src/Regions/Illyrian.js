import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Illyrian = () => {
  return (
    <section className="fade-in">
  <div className="container" style={{ marginTop: '10%' }}>
    <div className="row">
      <div className="col-md-5">
        <div className="project-info-box mt-0">
          <h5 className="project-title">ILLYRIAN ROOTS</h5>
          <p className="mb-0">
            The Illyrian Roots project explores Albania's rich history through its ancient castles and fortresses. From the impressive ruins of Kalivo Castle to the well-preserved walls of Berat Castle, this project highlights the architectural marvels and historical significance of these fortifications. Discover Albania's medieval heritage and the stories behind its historic sites.
          </p>
        </div>

        <div className="project-info-box">
          <p><b>Discover Illyrian Roots</b></p>
          <p>Historical Castles Across Albania</p>
          <p>Most Favored Months to Visit: Spring & Fall</p>
          <p>Popular for Historical Tours</p>
          <p className="mb-0"><b>Notable Castles: </b>Berat Castle & Kalivo Castle</p>
        </div>

        <div className="project-info-box mt-0 mb-0">
          <p className="mb-0">
            <span className="fw-bold mr-10 va-middle hide-mobile">Location: </span>
            <a href="https://www.google.com/maps/place/Albania/@41.1533,20.1683,10z/data=!3m1!4b1!4m6!3m5!1s0x1357f5d83d6a71b3:0x5d53b44f7686f7f!8m2!3d41.1533!4d20.1683!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
              <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
            </a>
          </p>
        </div>
      </div>

      <div className="col-md-7">
        <img
          src="https://sandaltanman.com/wp-content/uploads/2022/02/castles8-1-e1643820001666.jpg"
          alt="Illyrian Roots"
          className="rounded img-fluid"
        />
        <div className="project-info-box">
          <p><b>Categories:</b> Historical Castles</p>
          <p><b>Location:</b> Various Locations in Albania</p>
        </div>
      </div>
    </div>
  </div>
</section>

  
  
    
  );
};

export default Illyrian;
