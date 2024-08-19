import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AlbanianRiviera = () => {
  return (
   <section className="fade-in">
  <div className="container" style={{ marginTop: '10%' }}>
    <div className="row">
      <div className="col-md-5">
        <div className="project-info-box mt-0">
          <h5 className="project-title">ALBANIAN RIVIERA</h5>
          <p className="mb-0">
            The Albanian Riviera, stretching along the southern coast of Albania, is renowned for its stunning beaches, crystal-clear waters, and charming coastal villages. This project aims to showcase the natural beauty and cultural richness of the Riviera, including its picturesque seaside towns like Saranda and Himara. Visitors can enjoy beautiful beaches, historic sites, and vibrant local culture.
          </p>
        </div>

        <div className="project-info-box">
          <p><b>Discover the Albanian Riviera</b></p>
          <p>Coastal Region in Southern Albania</p>
          <p>Most Favored Months to Visit: Summer Season</p>
          <p>Popular Tourist Destination</p>
          <p className="mb-0"><b>Beaches: </b>Jale Beach & Dhermi Beach</p>
        </div>

        <div className="project-info-box mt-0 mb-0">
          <p className="mb-0">
            <span className="fw-bold mr-10 va-middle hide-mobile">Location: </span>
            <a href="https://www.google.com/maps/place/Albanian+Riviera,+Albania/@40.1833,19.9167,12z/data=!3m1!4b1!4m6!3m5!1s0x135d0c275fbf69b5:0x5457f20e72a8e15!8m2!3d40.1833!4d19.9167!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
              <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
            </a>
          </p>
        </div>
      </div>

      <div className="col-md-7">
        <img
          src="https://scratchyourmapa.com/wp-content/uploads/2022/07/Ksamil-beach.jpg"
          alt="Albanian Riviera"
          className="rounded img-fluid"
        />
        <div className="project-info-box">
          <p><b>Categories:</b> Coastal Region</p>
          <p><b>Location:</b> Southern Coast of Albania</p>
        </div>
      </div>
    </div>
  </div>
</section>

    
  );
};

export default AlbanianRiviera;
