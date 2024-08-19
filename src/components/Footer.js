import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div>
      
      <footer className="text-center text-white" style={{ backgroundColor: '#61bcf1dd',marginTop:'-5%' }}>
        <section className="mt-5">
          <div className="row text-center d-flex justify-content-center pt-5">
          <hr style={{color:'#61bcf1dd',marginTop:'-1%', height: '10px'}} /> 
           <hr style={{color:'#fff',marginTop:'-1%'}} /> <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
              <Link to="/Albania" className="text-white">About US</Link>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="https://www.toursbylocals.com/tours/albania" className="text-white">TRIPS AND GUIDES</a>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="https://albania.al/information/" className="text-white">EXTRA INFO</a>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="https://albania.al/contact-us/" className="text-white">CONTACT</a>
              </h6>
            </div>

            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="https://albania.al/blog/news/" className="text-white">MORE</a>
              </h6>
            </div>
          </div>
        </section>

        <hr className="my-5" />

        <section className="mb-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <p>
              Explore the beauty and heritage of Albania, a gem in the heart of the Balkans. From the stunning coastlines of the Ionian and Adriatic Seas to the majestic peaks of the Albanian Alps, Albania offers an array of unforgettable experiences. Our website provides comprehensive guides to the country’s most breathtaking destinations, cultural treasures, and vibrant local life.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-5">
          <a href="https://www.facebook.com/albaniantourismagency/" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://x.com/visit_albania" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
         
          <a href="https://www.instagram.com/albania.tourism/" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
         
          <a href="https://www.youtube.com/c/VisitAlbania" className="text-white me-4">
          <i className="fab fa-youtube"></i>
          </a>
        </section>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright : 
          <a className="text-white" href="https://albania.al/"> Albanian National Tourism Agency</a>
        </div>
      </footer>
      
    </div>
  );
};

export default Footer;
