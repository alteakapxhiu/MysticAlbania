import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutDiber = () => {
  return (
    <section className="fade-in">
        <div className="container" style={{marginTop:'10%'}}>
          <div className="row">
            <div className="col-md-5">
              <div className="project-info-box mt-0">
              <h5 className="project-title">DIBRA</h5>
<p className="mb-0">
  Dibër, a region rich in natural beauty and history, offers stunning landscapes like the Korab Mountain and Black Drin River. This project focuses on promoting sustainable tourism in the region by highlighting its cultural heritage and scenic views. Visitors can explore traditional Albanian villages, breathtaking hiking trails, and ancient ruins that tell the story of Dibër's unique past.
</p>
</div>

<div className="project-info-box">
  <p><b>Discover Dibër</b></p>
  <p> Historical City in the north of Albania</p>
  <p>Most Favored Months To Visit : Winter Season</p>
  <p>Booked almost full year</p>
  <p className="mb-0"><b>Mountains : </b>Korab & Black Drin River</p>
</div>

              <div className="project-info-box mt-0 mb-0" >
                <p className="mb-0">
                <span className="fw-bold mr-10 va-middle hide-mobile">Location : </span>
            <a href="https://www.google.com/maps/place/Dib%C3%ABr,+Albania/@41.5000,20.4667,12z/data=!3m1!4b1!4m6!3m5!1s0x1357e00c8b59a12f:0x5ff19b2c02f8dc7!8m2!3d41.5000!4d20.4667!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
            <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>          
             </a>
                </p>
              </div>
            </div>
    
            <div className="col-md-7">
              <img
                src="https://static.wixstatic.com/media/06637a_26a1fbb2e7c84febb00a3caa5a99db6d~mv2.jpg/v1/fill/w_1200,h_514,al_c,q_85,enc_auto/06637a_26a1fbb2e7c84febb00a3caa5a99db6d~mv2.jpg"
                alt="project-image"
                className="rounded img-fluid"
              />
              <div className="project-info-box">
                <p><b>Categories:</b> Historical City</p>
                <p><b>Location:</b> North of Albania</p>
              </div>
            </div>
          </div>
        </div>
        </section>
    
  );
};

export default AboutDiber;
