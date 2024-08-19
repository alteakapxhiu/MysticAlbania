import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Albania = () => {
  return (
<section className="fade-in">
  <div className="container" style={{ marginTop: '10%' }}>
    <div className="row">
      <div className="col-md-5">
        <div className="project-info-box mt-0">
          <h5 className="project-title">ALBANIA</h5>
          <p className="mb-0">
            Albania, a hidden gem in the Balkans, offers a unique blend of stunning landscapes, rich history, and vibrant culture. From the crystal-clear waters of the Adriatic and Ionian seas to the rugged beauty of the Albanian Alps, Albania is a destination that promises unforgettable experiences. Explore ancient ruins, picturesque villages, and breathtaking natural scenery, making it a perfect spot for adventure and relaxation.
          </p>
        </div>

        <div className="project-info-box">
          <p><b>Discover Albania</b></p>
          <p>Hidden Gem in the Balkans</p>
          <p>Most Favored Months To Visit: Spring & Autumn</p>
          <p>Popular Destination Year-Round</p>
          <p className="mb-0"><b>Highlights: </b>Albanian Riviera & Alps</p>
        </div>

        <div className="project-info-box mt-0 mb-0">
          <p className="mb-0">
            <span className="fw-bold mr-10 va-middle hide-mobile">Location: </span>
            <a href="https://www.google.com/maps/place/Albania/@41.1533,20.1683,7z/data=!3m1!4b1!4m6!3m5!1s0x1354d1e31c2a08d1:0x7ff0877920599f4!8m2!3d41.1533!4d20.1683!16zL20vMG9rbXQ" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
              <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
            </a>
          </p>
        </div>
      </div>

      <div className="col-md-7">
        <img
          src="https://cdn.prod.website-files.com/576fd5a8f192527e50a4b95c/63c167dfdf82ba7ea342da61_places%20to%20visit%20in%20albania.webp"
          alt="Albania"
          className="rounded img-fluid"
        />
        <div className="project-info-box">
          <p><b>Categories:</b> Scenic & Cultural Destination</p>
          <p><b>Location:</b> Southeastern Europe</p>
        </div>
      </div>
    </div>
  </div>
</section>

  
  
    
  );
};

export default Albania;
