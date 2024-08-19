import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AlbanianAlps = () => {
  return (
    <section className="fade-in">
    <div className="container" style={{ marginTop: '10%' }}>
      <div className="row">
        <div className="col-md-5">
          <div className="project-info-box mt-0">
            <h5 className="project-title">ALBANIAN ALPS</h5>
            <p className="mb-0">
              The Albanian Alps, also known as the Accursed Mountains, offer breathtaking landscapes with rugged peaks, deep valleys, and pristine natural beauty. This project highlights the majestic scenery and outdoor adventure opportunities in the region, including hiking, climbing, and exploring traditional mountain villages. Experience the raw beauty and tranquility of Albania's northern highlands.
            </p>
          </div>
  
          <div className="project-info-box">
            <p><b>Discover the Albanian Alps</b></p>
            <p>Mountain Range in Northern Albania</p>
            <p>Most Favored Months to Visit: Summer Season</p>
            <p>Popular for Hiking and Outdoor Activities</p>
            <p className="mb-0"><b>Peaks: </b>Mount Korab & Theth Valley</p>
          </div>
  
          <div className="project-info-box mt-0 mb-0">
            <p className="mb-0">
              <span className="fw-bold mr-10 va-middle hide-mobile">Location: </span>
              <a href="https://www.google.com/maps/place/Parku+Komb%C3%ABtar+%22Alpet+e+Shqip%C3%ABris%C3%AB%22/@42.4782307,19.3334917,11z/data=!4m10!1m2!2m1!1sAlpet!3m6!1s0x13527779287aa179:0xed20090da15a076a!8m2!3d42.4782307!4d19.6383623!15sCgVBbHBldJIBDW5hdGlvbmFsX3BhcmvgAQA!16s%2Fg%2F11k4xx_bs8?entry=ttu" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
                <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
              </a>
            </p>
          </div>
        </div>
  
        <div className="col-md-7">
          <img
            src="https://albania.al/wp-content/uploads/2019/08/qr8hpzxh580fad3e788c9_1000_0_C_60.jpg"
            alt="Albanian Alps"
            className="rounded img-fluid"
          />
          <div className="project-info-box">
            <p><b>Categories:</b> Mountain Range</p>
            <p><b>Location:</b> Northern Albania</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  
    
  );
};

export default AlbanianAlps;
