import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutTirana = () => {
  return (
<section className="fade-in">
  <div className="container" style={{marginTop:'10%'}}>
    <div className="row">
      <div className="col-md-5">
        <div className="project-info-box mt-0">
          <h5 className="project-title">TIRANA</h5>
          <p className="mb-0">
            Tirana, the capital city of Albania, is a vibrant and rapidly growing metropolis known for its mix of colorful buildings, modern architecture, and rich history. Visitors can explore the Skanderbeg Square, National History Museum, and Blloku district while enjoying the lively atmosphere of the city. Tirana is a hub of culture, politics, and art in Albania.
          </p>
        </div>

        <div className="project-info-box">
          <p><b>Discover Tirana</b></p>
          <p>Capital City of Albania</p>
          <p>Most Favored Months to Visit: Year-Round</p>
          <p>Known for Skanderbeg Square & National Gallery</p>
          <p className="mb-0"><b>Landmarks: </b>Pyramid of Tirana & Dajti Mountain</p>
        </div>

        <div className="project-info-box mt-0 mb-0">
          <p className="mb-0">
            <span className="fw-bold mr-10 va-middle hide-mobile">Location : </span>
            <a href="https://www.google.com/maps/place/Tirana,+Albania/@41.3275,19.8189,12z/data=!3m1!4b1!4m6!3m5!1s0x1355b4ef1b89f3b3:0x2f66c31ef0b6d4d!8m2!3d41.3275!4d19.8189!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
            <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>           </a>
          
          </p>
        </div>
      </div>

      <div className="col-md-7">
        <img
src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Skanderbeg_square_tirana_2016.jpg/1200px-Skanderbeg_square_tirana_2016.jpg"          alt="project-image"
          className="rounded img-fluid"
        />
        <div className="project-info-box">
          <p><b>Categories:</b> Capital City & Cultural Hub</p>
          <p><b>Location:</b> Central Albania</p>
        </div>
      </div>
    </div>
  </div>
</section>

    
  );
};

export default AboutTirana;