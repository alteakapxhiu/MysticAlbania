import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutDurres = () => {
  return (
    <section className="fade-in">
    <div className="container" style={{marginTop:'10%'}}>
      <div className="row">
        <div className="col-md-5">
          <div className="project-info-box mt-0">
          <h5 className="project-title">DURRESI</h5>
<p className="mb-0">
Durrës, Albania's second-largest city,known for its rich historical significance and beautiful coastline along the Adriatic Sea.Discover its ancient landmarks like the Roman Amphitheater and Byzantine Forum, alongside its vibrant beaches. With a perfect blend of history and modernity, Durrës offers visitors a unique experience of Albania's past and present.
</p>
</div>

<div className="project-info-box">
<p><b>Discover Durrës</b></p>
<p>Coastal City on the Adriatic Sea</p>
<p>Most Favored Months to Visit: Summer Season</p>
<p>Popular Destination Year-Round</p>
<p className="mb-0"><b>Landmarks: </b>Roman Amphitheater & Venetian Tower</p>
</div>

          <div className="project-info-box mt-0 mb-0" >
            <p className="mb-0">
            <span className="fw-bold mr-10 va-middle hide-mobile">Location : </span>
            <a href="https://www.google.com/maps/place/Durr%C3%ABs,+Albania/@41.3236,19.4558,12z/data=!3m1!4b1!4m6!3m5!1s0x135d2b8e8d1f4a99:0x24cf813fd9b75b5!8m2!3d41.3236!4d19.4558!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
            <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>          
             </a>
            </p>
          </div>
        </div>

        <div className="col-md-7">
          <img
            src="https://www.tui.pl/blog/wp-content/uploads/2024/05/shutterstock_2215138901-scaled.jpg"
            alt="project-image"
            className="rounded img-fluid"
          />
          <div className="project-info-box">
            <p><b>Categories:</b> Historical & Coastline City</p>
            <p><b>Location:</b> Western coast of Albania</p>
          </div>
        </div>
      </div>
    </div>
    </section>

    
  );
};

export default AboutDurres;
