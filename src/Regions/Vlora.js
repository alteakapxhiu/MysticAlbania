import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutVlora = () => {
  return (
    <section className="fade-in">
  <div className="container" style={{ marginTop: '10%' }}>
    <div className="row">
      <div className="col-md-5">
        <div className="project-info-box mt-0">
          <h5 className="project-title">VLORA</h5>
          <p className="mb-0">
            Vlora, located on the southwestern coast of Albania, is known for its beautiful beaches along the Ionian and Adriatic seas. The city boasts a vibrant nightlife and a rich history, including its role as the site of Albania's declaration of independence. Visitors can explore the lively promenade, the stunning coastline, and historical landmarks such as the Muradi Mosque and the Independence Square.
          </p>
        </div>

        <div className="project-info-box">
          <p><b>Discover Vlora</b></p>
          <p>Coastal City on the Adriatic & Ionian Seas</p>
          <p>Most Favored Months to Visit: Summer Season</p>
          <p>Popular Destination for Beach Lovers</p>
          <p className="mb-0"><b>Landmarks: </b>Independence Square & Muradi Mosque</p>
        </div>

        <div className="project-info-box mt-0 mb-0">
          <p className="mb-0">
            <span className="fw-bold mr-10 va-middle hide-mobile">Location : </span>
            <a href="https://www.google.com/maps/place/Vlor%C3%AB,+Albania/@40.4661,19.4883,12z/data=!3m1!4b1!4m6!3m5!1s0x135d1f57277f1f79:0xa9f0e6dd839d4d8!8m2!3d40.4661!4d19.4883!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
            </a>
          </p>
        </div>
      </div>

      <div className="col-md-7">
        <img
          src="https://www.freetour.com/images/tours/53943/walking-tour-around-vlore-01.jpg"
          alt="Vlora"
          className="rounded img-fluid"
        />
        <div className="project-info-box">
          <p><b>Categories:</b> Coastal & Historical City</p>
          <p><b>Location:</b> Southwestern Coast of Albania</p>
        </div>
      </div>
    </div>
  </div>
</section>

    
  );
};

export default AboutVlora;