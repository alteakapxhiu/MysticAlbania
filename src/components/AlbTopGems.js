import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import { useInView } from 'react-intersection-observer';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AlbTopGems = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedOption, setSelectedOption] = useState('option-1');

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Container id="AlbTopGems">
            <div ref={ref1} className={`slide-in ${inView1 ? 'visible' : ''}`}>
      <div>
      <hr style={{ borderColor: '#fff', borderWidth: '2px' }} />
        <h1>Explore Albania</h1>
        <hr style={{ borderColor: '#4b9ac8ef', borderWidth: '2px' }} />
      </div>
      <Nav  className="justify-content-center" variant="underline" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link
            href="#cities"
            onClick={() => handleSelect('option-1')}
            active={selectedOption === 'option-1'}
          >
            Coastline Cities
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#castles"
            onClick={() => handleSelect('option-2')}
            active={selectedOption === 'option-2'}
          >
            Landmarks
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#Cafees"
            onClick={() => handleSelect('option-3')}
            active={selectedOption === 'option-3'}
          >
           Historic Cities
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#Cafees"
            onClick={() => handleSelect('option-4')}
            active={selectedOption === 'option-4'}
          >
           Traditional Foods
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <hr style={{ borderColor: '#fff', borderWidth: '2px' }} />

      <div id="cities">
        {selectedOption === 'option-1' && (
           <>
             <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  Discover <span>SARANDA</span> treasures!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                Explore Saranda’s clear waters, ancient ruins & vibrant beaches.</p>
                <a href="#" className="card-hover__link">
                <Link to="/Saranda" className="explore-more-link">
               <span> Explore More</span>
                </Link>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
                <h4 > Discover <span>hidden</span> gems and get <span>10%</span> off!</h4>
              </div>
              <img
                src="https://starlines.it/wp-content/uploads/2021/02/spiaggia-Saranda-1030x686-1.jpg"
                alt="Castles"
              />
            </div>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  Discover <span> VLORA's</span> treasures!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                Uncover Vlora’s blend of history and beauty, where two seas meet.

</p>
                <a href="https://albania.al/destinations/vlora/" className="card-hover__link">
                <Link to="/Vlora" className="explore-more-link">
                  <span>Explore More</span>
                  </Link>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
                <h4>Discover <span>hidden</span> gems and get <span>10%</span> off!</h4>
              </div>
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/467206915.jpg?k=282cb3eab67f6b46db58fb4c6c29d1ea0f6f7d5edf37e8ba082e741f13cc5306&o=&hp=1"
                alt="More Treasures"
              />
            </div>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  Discover <span>DURRESI</span> treasures!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                Delve into Durrës’ ancient charm, rich history, and lively coast.                </p>
                <a href="#" className="card-hover__link">
                <Link to="/Durres" className="explore-more-link">
                  <span>Explore More</span>
                  </Link>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://akt.gov.al/wp-content/uploads/2019/07/durres5-1-1024x598.jpg"
                alt="More Treasures"
              />
            </div>
                 <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  Discover <span>HIMARA</span> treasures!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                Find peace in Himara’s rugged cliffs & serene waters.
</p>
                <a href="#" className="card-hover__link">
                <Link to="/Himara" className="explore-more-link">
                  <span>Explore More</span>
                  </Link>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://www.intoalbania.com/wp-content/uploads/2018/03/himare-me-logo-1800-1.jpg"
                alt="More Treasures"
              />
            </div>
          </>
        )}
      </div>
      <div id="castles">
        {selectedOption === 'option-2' && (
          <>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  Discover <span>BURINTI</span> today!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                A UNESCO World Heritage Site,filled with rich archaeological remains from Greek, Roman, and Venetian civilizations. </p>       
                <a href="https://www.google.com/maps/place/Butrint/@39.7832999,20.0284291,17z/data=!3m1!4b1!4m6!3m5!1s0x135b6b766e6b6eff:0xb1df82e4c759f864!8m2!3d39.7833!4d20.0333!16s%2Fg%2F11l3092fy4?entry=ttu" className="card-hover__link">
                  <span>Discover More</span>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://i0.wp.com/breatheintravel.com/wp-content/uploads/2022/04/Sans-titre-4.png?resize=850%2C478&ssl=1"
                alt="Castles"
              />
            </div>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  Find <span>APOLLONI</span> treasures!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                  
An ancient city known for its impressive ruins, including a well-preserved amphitheater & an archaeological museum.
                </p>
                <a href="https://www.google.com/maps/place/Apollonia,+Qyteti+Antik+Ilir/@40.7214375,19.4687927,17z/data=!4m6!3m5!1s0x134551ff0631544d:0x739933f875ad8617!8m2!3d40.72134!4d19.4710887!16s%2Fg%2F1q66ms0ps?entry=ttu" className="card-hover__link">
                  <span>Explore More</span>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://www.historyhit.com/app/uploads/bis-images/5149632/Apollonia-750x537-f50_50.jpg?x24183"
                alt="More Treasures"
              />
            </div>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  Discover <span>BLUE EYE</span> treasures!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
               A stunning natural spring in Albania known for its vibrant blue waters and captivating, eye-like appearance.
                </p>
                <a href="https://www.google.com/maps/place/The+Blue+Eye/@39.9236422,20.1875928,17z/data=!3m1!4b1!4m6!3m5!1s0x135b0f01c1bca3b5:0x4b23574d1579d66b!8m2!3d39.9236423!4d20.1924637!16s%2Fm%2F02qw17c?entry=ttu" className="card-hover__link">
                  <span>Explore More</span>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://wander-lush.org/wp-content/uploads/2022/04/Albania-Blue-Eye-Saranda-pool.jpg"
                alt="More Treasures"
              />
            </div>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  Discover <span>BYLLIS</span> treasures!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                An ancient site in Albania with well-preserved ruins, including a theater and city walls, showcasing its historical importance.                </p>
                <a href="https://www.google.com/maps/place/Parku+Arkeologjik+Bylis/@40.5421191,19.7350142,17z/data=!3m1!4b1!4m6!3m5!1s0x135ab7965768c993:0x9d15f9e27b659ef2!8m2!3d40.5421191!4d19.7375891!16s%2Fg%2F1wvvbm5t?entry=ttu" className="card-hover__link">
                  <span>Explore More</span>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://www.go-albania.com/files4users/images/articles/27/c13592860590_byllis1.jpg"
                alt="More Treasures"
              />
            </div>
          </>
        )}
      </div>
      <div id="Cafees">
        {selectedOption === 'option-3' && (
          <>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  Discover <span>GJIROKASTRA</span> today!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                Unveil the stone city of Gjirokastra, with its unique architecture and storied past.</p>
                <a href="#" className="card-hover__link">
                <Link to="/Gjirokastra" className="explore-more-link">
                  <span>Explore More</span>
                  </Link>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://w3mhh8jtzt.gjirafa.net/travel/blogdata/592e1a08-fd77-4ec9-a8bf-5eb1366a3114/0.jpg"
                alt="Castles"
              />
            </div>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  Discover <span>SHKODRA</span> treasures!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                Experience Shkodra’s blend of history & natural beauty, nestled by the lake and the mountains.</p>
                <a href="#" className="card-hover__link">
                <Link to="/Shkodra" className="explore-more-link">
                  <span>Explore More</span>
                  </Link>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://akt.gov.al/wp-content/uploads/2020/03/N34A2141.jpg"
                alt="More Treasures"
              />
            </div>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  Discover <span>KORCA'S</span> treasures!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                Stroll in Korça, where charming streets & rich culture come alive with the melodies of serenades.</p>
                <a href="#" className="card-hover__link">
                <Link to="/Korca" className="explore-more-link">
                  <span>Explore More</span>
                  </Link>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://emaslight.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-02-at-20.00.55.jpeg"
                alt="More Treasures"
              />
            </div>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  Discover <span>KRUJA'S</span> treasures!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                Explore Kruja, the historic city of Albania’s national hero, offering a deep sense of history.
                </p>
                <a href="#" className="card-hover__link">
                <Link to="/Kruje" className="explore-more-link">
                  <span>Explore More</span>
                  </Link>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://www.mywanderlust.pl/wp-content/uploads/2022/04/kruja-albania-105.jpg"
                alt="More Treasures"
              />
            </div>
          </>
        )}
      </div>
      <div id="More">
        {selectedOption === 'option-4' && (
          <>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  TRY OUT <span>LAKROR</span>!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                Lakror is a traditional Albanian pie with flaky pastry and savory fillings.
                </p>
                <a href="https://www.myalbanianfood.com/recipe/albanian-pras-lakror-leek-pie/" className="card-hover__link">
                  <span>Discover More</span>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://agroweb.org/wp-content/uploads/2019/01/lakroriii.jpg"
                alt="Castles"
              />
            </div>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  TRY OUT OUR <span>FLIJA</span>!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
              Flija is a traditional Albanian dish made of layered crepes cooked with yogurt and savory fillings.
                </p>
                <a href="https://easybreezybites.com/albanian-flija-recipe/" className="card-hover__link">
                  <span>Explore More</span>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://elitetravel-albania.com/wp-content/uploads/2021/09/Fli-1024x719.jpg"
                alt="More Treasures"
              />
            </div>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  TRY OUT <span>TRAHANA</span >!
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                Trahana is a traditional Albanian dish made from fermented grain and yogurt.               </p>
                <a href="https://www.196flavors.com/trahana/" className="card-hover__link">
                  <span>Explore More</span>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://realgreekrecipes.com/wp-content/uploads/2022/01/Greek-Trahana-Recipe.jpg"
                alt="More Treasures"
              />
            </div>
            <div className="card-hover">
              <div className="card-hover__content">
                <h3 className="card-hover__title" style={{color:'#fff'}}>
                  TRY OUT <span>ROSHNICA</span> !
                </h3>
                <p className="card-hover__text" style={{color:'#fff'}}>
                A traditional Albanian pasta made from wheat and typically served with rich, savory sauces.               </p>
                <a href="https://www.artigatimit.com/2019/12/rosnica-kuzhina-shqiptare/" className="card-hover__link">
                  <span>Explore More</span>
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
              <div className="card-hover__extra">
              </div>
              <img
                src="https://media-cdn.tripadvisor.com/media/photo-p/1c/8d/79/44/roshnica.jpg"
                alt="More Treasures"
              />
            </div>
            
          </>
        )}
      </div>
      </div>
      <hr style={{ borderTop: '2px solid #fff' }} />
    </Container>
  );
}

export default AlbTopGems;
