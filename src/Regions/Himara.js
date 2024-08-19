import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutHimare = () => {
  return (
    <section className="fade-in">
  <div className="container" style={{marginTop:'10%'}}>
    <div className="row">
      <div className="col-md-5">
        <div className="project-info-box mt-0">
          <h5 className="project-title">HIMARA</h5>
          <p className="mb-0">
            Himara, located along the southern Albanian Riviera, is a picturesque coastal town known for its stunning beaches and crystal-clear waters. With its blend of Greek and Albanian cultures, Himara offers a unique experience for visitors. Known for its peaceful atmosphere, Himara is an ideal destination for relaxation and seaside exploration.
          </p>
        </div>

        <div className="project-info-box">
          <p><b>Discover Himara</b></p>
          <p>Coastal Town on the Albanian Riviera</p>
          <p>Most Favored Months to Visit: Summer Season</p>
          <p>Known for Beaches & Clear Waters</p>
          <p className="mb-0"><b>Landmarks: </b>Gjipe Beach & Porto Palermo Castle</p>
        </div>

        <div className="project-info-box mt-0 mb-0">
          <p className="mb-0">
          <span className="fw-bold mr-10 va-middle hide-mobile">Location : </span>
    <a href="https://www.google.com/maps/place/Himara,+Albania/@40.0980,19.7271,12z/data=!3m1!4b1!4m6!3m5!1s0x1357b84b4d7a65c7:0x8e89b8dcd3a0752!8m2!3d40.0980!4d19.7271!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
      <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
    </a>
         
          </p>
        </div>
      </div>

      <div className="col-md-7">
        <img
          src="https://storage.googleapis.com/albania-travel-guide/2022/07/Himare-Albania-Travel-Guide-6.jpg"
          alt="project-image"
          className="rounded img-fluid"
        />
        <div className="project-info-box">
          <p><b>Categories:</b> Coastal & Seaside Town</p>
          <p><b>Location:</b> Southern Albania</p>
        </div>
      </div>
    </div>
  </div>
</section>

    
  );
};

export default AboutHimare;
