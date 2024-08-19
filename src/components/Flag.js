import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'; 
import 'mdb-react-ui-kit/dist/css/mdb.min.css'; 
import { useInView } from 'react-intersection-observer';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Flag = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <header>
    
    <div ref={ref1} className={`slide-in ${inView1 ? 'visible' : ''}`}>

      <div
        id="intro-example"
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: 'url("https://www.elle.com.au/wp-content/uploads/sites/6/2024/06/albanian-riviera-1024x576.jpg")',
          height: '700px',
        }}
      >
        <div className="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Mystic Albania</h1>
              <h5 className="mb-4">Explore the beautiful, ancient and magneficent hidden wonders of Albania</h5>
              <Button variant="outline-light" size="lg" className="m-2" href="https://youtu.be/48zpwvrIG_0" target="_blank" rel="nofollow">
                Take a Look
              </Button>
              <Button variant="outline-light" size="lg" className="m-2" href="https://youtu.be/0x8bgigShRc" target="_blank">
                Discover more
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* End Background image */}
    </header>
  );
};

export default Flag;
