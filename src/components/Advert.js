import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Advert = () => {
 
  
  const [liked, setLiked] = useState({});

  const handleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
 const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const articles = [
    {
      id: 1,
      category: 'DISCOVER ALBANIA',
      title: 'Explore valuable tips and tricks to enhance your stay in Albania! From cultural insights to practical advice, discover ways to make your experience even more enjoyable.',
      duration: '3 minutes',
      image: 'https://i.ytimg.com/vi/EeQq1HYRCpE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCN8WESW6RClv-pCxvtGRfdIiCiIw',
      link: 'https://wander-lush.org/travel-tips-for-albania-first-time-visitors/',
    },
    {
      id: 2,
      category: ' Local Art and Craft',
      title: 'Showcase local arts like handwoven rugs, pottery, and embroidery.',
      duration: '4 minutes',
      image: 'https://travellingbalkans.com/wp-content/uploads/2020/01/DSC00467-scaled.jpg',
      link: 'https://albania.al/activity/culture/typical-crafts/',
    },
    {
      id: 3,
      category: ' Adventure Activities',
      title: 'Try out hiking, biking, and rock climbing in areas like Theth and Valbona',
      duration: '2 minutes',
      image: 'https://www.ourbigjourney.com/wp-content/uploads/2021/10/DSC08319.jpg',
      link: 'https://www.alltrails.com/albania',
    },
    {
      id: 4,
      category: 'Travel Tips',
      title: 'Discover the quickest ways to get around',
      duration: '5 minutes',
      image: 'https://s.inyourpocket.com/gallery/307588.jpg',
      link: 'https://albania.al/transport/',
    },
  ];

  return (
    
    <section className="advert">
            <div ref={ref1} className={`slide-in ${inView1 ? 'visible' : ''}`}>

        <header className="advert-header" style={{ backgroundColor: '#61bcf1dd',color:'#fff' }}>
          <hr style={{ borderTop: '2px solid #61bcf1dd' }} />
          <h2 >ADDITIONAL INFORMATION</h2>
          <p style={{color:'#fff' }}className="advert-description">Tips and Tricks to make your stay in Albania even more enjoyable!</p>
          <a href="https://www.britannica.com/place/Albania" style={{ textDecoration: 'none' }}>
            <hr style={{ borderTop: '2px solid #fff' }} />
            <h3 className="advert-title" style={{color:'#fff' }}>See More</h3>
          </a>
          <hr style={{ borderTop: '2px solid #61bcf1dd' }} />
        </header>

        <div className="advert-content">
          <div className="advert-main-card">
            <img src={articles[0].image} alt={articles[0].category} className="advert-main-img" />
            <div className="advert-card-info">
              <h3 className="advert-category">{articles[0].category}</h3>
              <hr />
              <a href={articles[0].link} className="advert-title-link">
                <p className="advert-title">{articles[0].title}</p>
              </a>
              <span className="advert-duration">{articles[0].duration}</span>
            </div>
            <button
              className={`advert-card-like ${liked[articles[0].id] ? 'liked' : ''}`}
              onClick={() => handleLike(articles[0].id)}
              aria-label="Like"
            >
              <i className={`fa${liked[articles[0].id] ? 's' : 'r'} fa-heart`}></i>
            </button>
          </div>

          <div className="advert-side-cards">
            {articles.slice(1).map((article) => (
              <div key={article.id} className="advert-side-card">
                <img src={article.image} alt={article.category} className="advert-side-img" />
                <div className="side-cards-info">
                 <hr /> <h3 className="advert-category">{article.category}</h3>
                  
                  <a href={article.link} className="advert-title-link">
                    <p className="advert-title">{article.title}</p>
                  </a>
                  <span className="advert-duration">{article.duration}</span>
                </div>
                <button
                  className={`advert-card-like ${liked[article.id] ? 'liked' : ''}`}
                  onClick={() => handleLike(article.id)}
                  aria-label="Like"
                >
                  <i className={`fa${liked[article.id] ? 's' : 'r'} fa-heart`}></i>
                </button>
              </div>
            ))}
          </div>
        </div>
     </div>
    </section>
  );
};

export default Advert;
