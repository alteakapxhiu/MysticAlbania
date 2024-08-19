import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutKruje = () => {
  return (
    <section className="fade-in">
    <div className="container" style={{marginTop:'10%'}}>
      <div className="row">
        <div className="col-md-5">
          <div className="project-info-box mt-0">
            <h5 className="project-title">KRUJA</h5>
            <p className="mb-0">
              Krujë, located near the capital of Albania, is a city famous for its historical significance and connection to Albania's national hero, Skanderbeg. Known for Krujë Castle and its traditional bazaar, the city is a symbol of Albanian resistance against the Ottoman Empire. Visitors can explore its rich history, cultural landmarks, and stunning views of the surrounding mountains.
            </p>
          </div>
  
          <div className="project-info-box">
            <p><b>Discover Krujë</b></p>
            <p>Historical City Near Tirana</p>
            <p>Most Favored Months to Visit: Spring & Autumn</p>
            <p>Known for Skanderbeg History & Traditional Bazaar</p>
            <p className="mb-0"><b>Landmarks: </b>Krujë Castle & Skanderbeg Museum</p>
          </div>
  
          <div className="project-info-box mt-0 mb-0">
            <p className="mb-0">
              <span className="fw-bold mr-10 va-middle hide-mobile">Location : </span>
              <a href="https://www.google.com/maps/place/Krujë,+Albania/@41.5111,19.8060,12z/data=!3m1!4b1!4m6!3m5!1s0x13565c4d0302e44d:0x7e9b9168820c20e!8m2!3d41.5111!4d19.8060!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
             <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
             </a>
         
            </p>
          </div>
        </div>
  
        <div className="col-md-7">
          <img
            src="https://i.ytimg.com/vi/SIxTr3WbZlY/maxresdefault.jpg"
            alt="project-image"
            className="rounded img-fluid"
          />
          <div className="project-info-box">
            <p><b>Categories:</b> Historical & Cultural City</p>
            <p><b>Location:</b> Central Albania</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
    
  );
};

export default AboutKruje;
