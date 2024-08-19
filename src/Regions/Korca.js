import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutKorce = () => {
  return (
    <section className="fade-in">
  <div className="container" style={{ marginTop: '10%' }}>
    <div className="row">
      <div className="col-md-5">
        <div className="project-info-box mt-0">
          <h5 className="project-title">KORÇA</h5>
          <p className="mb-0">
            Korça, known as the "City of Serenades," is located in southeastern Albania. It is celebrated for its rich cultural heritage, including traditional architecture and the annual Korça Beer Festival. Visitors can explore the charming pedestrian streets, historical sites, and enjoy the unique blend of Albanian and Ottoman influences in this vibrant city.
          </p>
        </div>

        <div className="project-info-box">
          <p><b>Discover Korça</b></p>
          <p>City in Southeastern Albania</p>
          <p>Most Favored Months to Visit: Spring & Autumn</p>
          <p>Known for Cultural Festivals</p>
          <p className="mb-0"><b>Landmarks: </b>Korça Cathedral & Old Bazaar</p>
        </div>

        <div className="project-info-box mt-0 mb-0">
          <p className="mb-0">
            <span className="fw-bold mr-10 va-middle hide-mobile">Location : </span>
            <a href="https://www.google.com/maps/place/Kor%C3%A7%C3%AB,+Albania/@40.6000,20.7822,12z/data=!3m1!4b1!4m6!3m5!1s0x1355d43737996c3b:0x302e1a5646b9821!8m2!3d40.6000!4d20.7822!16zL20vMDJmOG4" className="btn btn-xs btn-location btn-circle btn-icon mr-5 mb-0">
              <i className="fas fa-map-marker-alt" style={{ color: '#007bff' }}></i>
            </a>
          </p>
        </div>
      </div>

      <div className="col-md-7">
        <img
          src="https://static.wixstatic.com/media/06637a_bed6e9284ebd4c60aacc75c550fd24ed~mv2.jpg/v1/fill/w_1962,h_840,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/06637a_bed6e9284ebd4c60aacc75c550fd24ed~mv2.jpg"
          alt="Korça"
          className="rounded img-fluid"
        />
        <div className="project-info-box">
          <p><b>Categories:</b> Cultural & Historical City</p>
          <p><b>Location:</b> Southeastern Albania</p>
        </div>
      </div>
    </div>
  </div>
</section>

    
  );
};

export default AboutKorce;
