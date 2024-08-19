import React from 'react';

const Parallax = () => {
  const parallaxStyle = {
    backgroundImage: 'url(https://deih43ym53wif.cloudfront.net/skanderbeg-square-with-flag-skanderbeg-monument-and-the-et-hem-bey-mosque-in-the-center-of-tirana-city-albania-AdobeStock_126268393.jpg_71a6eb77a8.jpg)',
    height: '500px',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  return (
    <div>
      <div style={parallaxStyle}></div>
      </div>
    
  );
};

export default Parallax;
