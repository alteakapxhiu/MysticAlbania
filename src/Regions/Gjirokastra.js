import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutGjirokastra = () => {
  return (
<section className="fade-in">
  <div className="container" style={{marginTop:'10%'}}>
    <div className="row">
      <div className="col-md-5">
        <div className="project-info-box mt-0">
          <h5 className="project-title">GJIROKASTRA</h5>
          <p className="mb-0">
            Gjirokastra, known as the "City of Stone," is a UNESCO World Heritage site located in southern Albania. Famous for its Ottoman-era architecture, including stone houses and cobblestone streets, Gjirokastra offers a journey through history. The city's fortress and traditional houses provide a unique glimpse into Albania's cultural past.
          </p>
        </div>

        <div className="project-info-box">
          <p><b>Discover Gjirokastra</b></p>
          <p>Historical City in Southern Albania</p>
          <p>Most Favored Months to Visit: Spring & Autumn</p>
          <p>Known for Stone Houses & Ottoman Architecture</p>
          <p className="mb-0"><b>Landmarks: </b>Gjirokastra Castle & Ethnographic Museum</p>
        </div>

        <div className="project-info-box mt-0 mb-0">
          <p className="mb-0">
          <span className="fw-bold mr-10 va-middle hide-mobile">Location : </span>
    <a href="https://www.google.com/maps/place/Gjirokaster,+Albania/@40.0666,20.1405,13z/data=!3m1!4b1!4m6!3m5!1s0x1357d85b9e21ebd7:0x2fffe0e6b3e5736!8m2!3d40.0666!4d20.1405!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
      <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
    </a>
          </p>
        </div>
      </div>

      <div className="col-md-7">
        <img
          src="https://sandaltanman.com/wp-content/uploads/2021/08/wow-1-e1628079765518.jpg"
          alt="project-image"
          className="rounded img-fluid"
        />
        <div className="project-info-box">
          <p><b>Categories:</b> Historical & Cultural City</p>
          <p><b>Location:</b> Southern Albania</p>
        </div>
      </div>
    </div>
  </div>
</section>

    
  );
};

export default AboutGjirokastra;
