import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutElbasan = () => {
  return (
<section className="fade-in">
  <div className="container" style={{marginTop:'10%'}}>
    <div className="row">
      <div className="col-md-5">
        <div className="project-info-box mt-0">
          <h5 className="project-title">ELBASANI</h5>
          <p className="mb-0">
            Elbasan, located in the central region of Albania, is a city steeped in history and culture. Known for its well-preserved castle, Ottoman-era architecture, and traditional cuisine, Elbasan offers visitors a glimpse into the rich heritage of Albania. With its vibrant festivals and picturesque surroundings, the city stands as a cultural hub with a blend of history and modernity.
          </p>
        </div>

        <div className="project-info-box">
          <p><b>Discover Elbasan</b></p>
          <p>Historical City in Central Albania</p>
          <p>Most Favored Months to Visit: Spring & Autumn</p>
          <p>Known for Traditional Festivals & Cuisine</p>
          <p className="mb-0"><b>Landmarks: </b>Elbasan Castle & King Mosque</p>
        </div>

        <div className="project-info-box mt-0 mb-0">
          <p className="mb-0">
          <span className="fw-bold mr-10 va-middle hide-mobile">Location : </span>
          <a href="https://www.google.com/maps/place/Elbasan,+Albania/@41.1123,20.2830,12z/data=!3m1!4b1!4m6!3m5!1s0x1355f5e468b64b2b:0x2305d99b46448e4!8m2!3d41.1123!4d20.2830!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
            <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>          
             </a>
          </p>
        </div>
      </div>

      <div className="col-md-7">
        <img
          src="https://i.ytimg.com/vi/ISeXqWoDOuI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBQDc9Mgk6LAfs_TLZ6KEKUxNPIPg"
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

export default AboutElbasan;
