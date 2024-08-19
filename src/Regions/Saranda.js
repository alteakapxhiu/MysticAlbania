import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutSaranda = () => {
  return (
    <section className="fade-in">
    <div className="container" style={{ marginTop: '10%' }}>
      <div className="row">
        <div className="col-md-5">
          <div className="project-info-box mt-0">
            <h5 className="project-title">SARANDA</h5>
            <p className="mb-0">
              Saranda, a beautiful coastal city in southern Albania, is renowned for its stunning beaches and clear blue waters along the Ionian Sea. It's a popular destination for sun-seekers and those wanting to explore ancient ruins, including the nearby Butrint Archaeological Site, a UNESCO World Heritage site. Saranda offers a perfect blend of relaxation and cultural exploration.
            </p>
          </div>
  
          <div className="project-info-box">
            <p><b>Discover Saranda</b></p>
            <p>Coastal City on the Ionian Sea</p>
            <p>Most Favored Months to Visit: Summer Season</p>
            <p>Popular Beach Destination</p>
            <p className="mb-0"><b>Landmarks: </b>Butrint Archaeological Site & Lekursi Castle</p>
          </div>
  
          <div className="project-info-box mt-0 mb-0">
            <p className="mb-0">
              <span className="fw-bold mr-10 va-middle hide-mobile">Location : </span>
              <a href="https://www.google.com/maps/place/Saranda,+Shqip%C3%ABria/@39.86717,19.9859648,14z/data=!3m1!4b1!4m6!3m5!1s0x135b14ffafac5431:0xd6d55e7e08a21910!8m2!3d39.8745571!4d20.0070819!16zL20vMDN5eGJt?entry=ttu" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
              </a>
            </p>
          </div>
        </div>
  
        <div className="col-md-7">
          <img
            src="https://www.grecia.info/wp-content/uploads/sites/71/albania-saranda-hd.jpg"
            alt="Saranda"
            className="rounded img-fluid"
          />
          <div className="project-info-box">
            <p><b>Categories:</b> Coastal & Historical City</p>
            <p><b>Location:</b> Southern Coast of Albania</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    
  );
};

export default AboutSaranda;
