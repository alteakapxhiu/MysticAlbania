import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';


const Attractions = () => {
    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });


  return (
    <section id="attractions">
      <div ref={ref1} className={`slide-in ${inView1 ? 'visible' : ''}`}>
      <div className='mobile'>
          <hr style={{ borderTop: '2px solid #fff' }} />
          <div className="banner">
          <Link to="/Tirana" className="explore-more-link">
<h1 className="banner-title">Create your ideal journey</h1>
</Link>
          </div>
          <div className="card-group">
            <div className="card">
        
         
          <Link to="/Tirana" className="explore-more-link">  <img className="card-img-top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/c0/9b/6b/2012-10-29-12-largejpg.jpg?w=500&h=500&s=1" alt="Attraction 1" /> </Link>
          <Link to="/Tirana" className="explore-more-link"> <h5 className="card-title">TIRANA CAPITAL</h5></Link>
              <p className="card-description"></p>
              <div className="card-body"></div>
            </div>
            <div className="card">
              
              <Link to="/AlbanianAlps" className="explore-more-link"><img className="card-img-top" src="https://scontent.ftia5-1.fna.fbcdn.net/v/t39.30808-6/295665987_3224612937750927_4160201853269524967_n.jpg?stp=dst-jpg_s640x640&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=OcTdADO-Za4Q7kNvgHrQfhW&_nc_ht=scontent.ftia5-1.fna&oh=00_AYDPO6Nh_xf0gf_tDKGP0s6SxhoAiM1qMglL_Z5Rd7IkYA&oe=66C55A44" alt="Attraction 1" /></Link> 
              <Link to="/AlbanianAlps" className="explore-more-link"> <h5 className="card-title">Albanian Alps</h5></Link>
              <p className="card-description"></p>
              <div className="card-body"></div>
            </div>
            <div className="card">
            <Link to="/AlbanianRiviera" className="explore-more-link"> <h5 className="card-title">Albanian Riviera</h5>
              <img className="card-img-top" src="https://www.thesun.ie/wp-content/uploads/sites/3/2023/07/xokqpyfseyuc8rxabzo22fed5on6xnqkny9qbjal-JS793728296-1.jpg?strip=all&quality=100&w=1920&h=1440&crop=1" alt="Attraction 1" /></Link>
              <p className="card-description"></p>
              <div className="card-body"></div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://kryeministria.al/wp-content/uploads/2021/11/Kalaja-e-Beratit.jpg" alt="Attraction 2" />
              <div className="card-body">
              <Link to="/Illyrian" className="explore-more-link"> <h5 className="card-title">Illyrian Roots</h5></Link>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src="https://i.redd.it/2rvlhg9ipvx61.jpg" alt="Attraction 3" />
              <div className="card-body">
              <Link to="/Marina" className="explore-more-link"> <h5 className="card-title">MARINA</h5></Link>
              </div>
            </div>
          </div></div>

          
          </div>
         <hr style={{ borderTop: '2px solid #fff' }} />
         <hr style={{ borderTop: '2px solid #fff' }} />
        

    </section>
  );
};

export default Attractions;
