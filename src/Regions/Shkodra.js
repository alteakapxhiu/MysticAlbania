import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutShkodra = () => {
  return (
    <section className="fade-in">
  <div className="container" style={{marginTop:'10%'}}>
    <div className="row">
      <div className="col-md-5">
        <div className="project-info-box mt-0">
          <h5 className="project-title">SHKODRA</h5>
          <p className="mb-0">
            Shkodra, located in northern Albania, is a city renowned for its cultural importance and proximity to Lake Shkodra. Known for the Rozafa Castle and its rich history, Shkodra is a key cultural and artistic hub of Albania. Visitors can explore its vibrant cultural scene, historic buildings, and scenic lake views.
          </p>
        </div>

        <div className="project-info-box">
          <p><b>Discover Shkodra</b></p>
          <p>Historical and Cultural City in Northern Albania</p>
          <p>Most Favored Months to Visit: Spring & Summer</p>
          <p>Known for Cultural Festivals & Lake Shkodra</p>
          <p className="mb-0"><b>Landmarks: </b>Rozafa Castle & Marubi National Museum</p>
        </div>

        <div className="project-info-box mt-0 mb-0">
          <p className="mb-0">
          <span className="fw-bold mr-10 va-middle hide-mobile">Location : </span>
            <a href="https://www.google.com/maps/place/Shkod%C3%ABr,+Albania/@42.0656,19.5127,12z/data=!3m1!4b1!4m6!3m5!1s0x135f52dd4f06d6c5:0x24e0b0e6e62b2f0!8m2!3d42.0656!4d19.5127!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
            </a>
          </p>
        </div>
      </div>

      <div className="col-md-7">
        <img
          src="https://albaniatouristplaces.com/wp-content/uploads/2023/01/shkodra-lake-6.jpg"
          alt="project-image"
          className="rounded img-fluid"
        />
        <div className="project-info-box">
          <p><b>Categories:</b> Historical & Cultural City</p>
          <p><b>Location:</b> Northern Albania</p>
        </div>
      </div>
    </div>
  </div>
</section>

    
  );
};

export default AboutShkodra;
