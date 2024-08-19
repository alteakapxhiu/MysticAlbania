import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutKukes = () => {
  return (
    <section className="fade-in">
  <div className="container" style={{ marginTop: '10%' }}>
    <div className="row">
      <div className="col-md-5">
        <div className="project-info-box mt-0">
          <h5 className="project-title">KUKËS</h5>
          <p className="mb-0">
            Kukës is a city in northeastern Albania known for its stunning mountainous landscapes and its role as a gateway to the Albanian Alps. The city is famous for its picturesque setting along the banks of the Black Drin River and its proximity to natural attractions such as the Koman Lake. Kukës offers visitors a unique experience with its blend of natural beauty and cultural heritage.
          </p>
        </div>

        <div className="project-info-box">
          <p><b>Discover Kukës</b></p>
          <p>City in Northeastern Albania</p>
          <p>Most Favored Months to Visit: Spring & Summer</p>
          <p>Popular for Outdoor Activities</p>
          <p className="mb-0"><b>Landmarks: </b>Black Drin River & Koman Lake</p>
        </div>

        <div className="project-info-box mt-0 mb-0">
          <p className="mb-0">
            <span className="fw-bold mr-10 va-middle hide-mobile">Location : </span>
            <a href="https://www.google.com/maps/place/Kuk%C3%ABs,+Albania/@42.0833,20.3833,12z/data=!3m1!4b1!4m6!3m5!1s0x1357a1d5eb5f2c95:0xe8b9bb89b8f78d3!8m2!3d42.0833!4d20.3833!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
            </a>
          </p>
        </div>
      </div>

      <div className="col-md-7">
        <img
          src="https://i.ytimg.com/vi/M9L644FiriY/maxresdefault.jpg"
          alt="Kukës"
          className="rounded img-fluid"
        />
        <div className="project-info-box">
          <p><b>Categories:</b> Natural & Cultural City</p>
          <p><b>Location:</b> Northeastern Albania</p>
        </div>
      </div>
    </div>
  </div>
</section>


    
  );
};

export default AboutKukes;
