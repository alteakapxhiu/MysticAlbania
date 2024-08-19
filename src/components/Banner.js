import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';


const Banner = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate(); 

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const handleClick = (path) => {
    navigate(path); 
  };

  return (
    <section id="home">
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      interval={3000}
      className="custom-carousel"
    >
      <Carousel.Item className="fade-in">
        <img
          className="d-block w-100"
          src="https://eia476h758b.exactdn.com/wp-content/uploads/2023/12/Blue-eye-spring-near-Sarande-Albania.jpeg?strip=all&lossy=1&ssl=1"
          alt="First slide"
        />
        <div className="carousel-caption-container">
          <header className="CarouselCaption">
            <h3>Visit Albania</h3>
            <p>Albania, a hidden gem in the Balkans will be your perfect getaway to unforgetable memoires</p>
            <button className="carousel-button" onClick={() => handleClick('/Albania')}>Learn More</button>
          </header>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/10/291390.jpg"
          alt="Second slide"
        />
        <div className="carousel-caption-container">
          <header className="CarouselCaption">
            <h3>Visit Albanian Riviera</h3>
            <p>
              Dive into the clear crystal blue Adriatic and Ionian sea
            </p>
            <button className="carousel-button" onClick={() => handleClick('/AlbanianRiviera')}>Discover More</button>
          </header>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://eia476h758b.exactdn.com/wp-content/uploads/2023/07/Peaks-of-Albanian-Alps-in-Valbona-Valley-National-Park-Albania-scaled.jpeg?strip=all&lossy=1&ssl=1"
          alt="Our Beautiful Alps"
        />
        <div className="carousel-caption-container">
          <header className="CarouselCaption">
            <h3>Our Beautiful Alps</h3>
            <p>
            Our Alps are a stunningly rugged mountain range in northern Albania.
            </p>
            <button className="carousel-button" onClick={() => handleClick('/AlbanianAlps')}>Explore</button>
          </header>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://invest-in-albania.org/wp-content/uploads/gjirokastra-albania-3.jpg"
          alt="UNESCO"
        />
        <div className="carousel-caption-container">
          <header className="CarouselCaption">
            <h3>UNESCO World Heritage</h3>
            <p>

            Albania is home to UNESCO-protected treasures like Butrint, Gjirokastër, Berat, and the Ohrid region.</p>
            <button className="carousel-button" onClick={() => handleClick('/Gjirokastra')}>Learn More</button>
          </header>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://eia476h758b.exactdn.com/wp-content/uploads/2023/07/Gjirokastra-Citadel-Castle.jpeg?strip=all&lossy=1&ssl=1"
          alt="Sofra Dardane"
        />
        <div className="carousel-caption-container">
          <header className="CarouselCaption">
            <h3>History preserved in centuries</h3>
            <p>
            A journey through ancient Illyrian civilizations invites visitors to explore its rich heritage.</p>
            <button className="carousel-button" onClick={() => handleClick('/Illyrian')}>Discover More</button>
          </header>
        </div>
      </Carousel.Item>
    </Carousel>
    
    </section>
  );
}

export default Banner;
