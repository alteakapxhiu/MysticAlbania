import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Marina = () => {
  return (
    <section className="fade-in">
    <div className="container" style={{ marginTop: '10%' }}>
      <div className="row">
        <div className="col-md-5">
          <div className="project-info-box mt-0">
            <h5 className="project-title">MARINA</h5>
            <p className="mb-0">
              Marina, a stunning waterfront destination, offers picturesque views, luxurious amenities, and vibrant marine activities. This project focuses on highlighting the beauty of Marina's coastline, its recreational opportunities, and the local maritime culture. Ideal for relaxation, sailing, and enjoying seaside leisure.
            </p>
          </div>
  
          <div className="project-info-box">
            <p><b>Discover Marina</b></p>
            <p>Waterfront Destination</p>
            <p>Most Favored Months to Visit: Summer Season</p>
            <p>Popular for Water Sports and Leisure</p>
            <p className="mb-0"><b>Features: </b>Marina Docks & Luxury Resorts</p>
          </div>
  
          <div className="project-info-box mt-0 mb-0">
            <p className="mb-0">
              <span className="fw-bold mr-10 va-middle hide-mobile">Location: </span>
              <a href="https://www.google.com/maps/place/Marina,+Albania/@40.5000,19.5000,12z/data=!3m1!4b1!4m6!3m5!1s0x1355e5f4c7c3a99b:0x5b5e0e8d7d5f3c0!8m2!3d40.5000!4d19.5000!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
                <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
              </a>
            </p>
          </div>
        </div>
  
        <div className="col-md-7">
          <img
            src="https://vloramarina.com/marina/"
            alt="Marina"
            className="rounded img-fluid"
          />
          <div className="project-info-box">
            <p><b>Categories:</b> Waterfront & Luxury</p>
            <p><b>Location:</b> Coastal Albania</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
  
    
  );
};

export default Marina;
