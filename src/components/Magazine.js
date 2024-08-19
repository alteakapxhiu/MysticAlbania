import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from "react-bootstrap";

const MagazineSection = () => {
 
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
      title: "Explore Albania's Culture",
      imgSrc: "https://static.independent.co.uk/2022/08/25/15/Akuariumit.jpg",
      description: "Discover our Illyrian roots and ancient art...",
      link: "https://www.tripadvisor.com/Attractions-g294445-Activities-c42-t225-Albania.html", 
    },
    {
      id: 2,
      title: "Best Beaches in Albania",
      imgSrc: "https://content.r9cdn.net/rimg/dimg/7d/d6/e7a24e55-ctry-2-16bf5d277b8.jpg?width=1366&height=768&xhint=1649&yhint=1418&crop=true",
      description: "The most beautiful seaside destinations...",
      link: "https://www.tripadvisor.com/Attractions-g294445-Activities-c61-t52-Albania.html", 
    },
    {
      id: 3,
      title: "Tastes of Albania",
      imgSrc: "https://irp.cdn-website.com/560b6587/dms3rep/multi/image20-f1109880.png",
      description: "Experience the unique culinary delights...",
      link: "https://www.tripadvisor.com/Attraction_Review-g294446-d8641514-Reviews-Taste_of_Albania-Tirana_Tirana_County.html", 
    },
  ];


  return (
    
    <Container className="my-5">
 <div ref={ref1} className={`slide-in-section ${inView1 ? 'visible' : ''}`}>

        <hr/>
<hr style={{color:'#fff'}}/>
<hr style={{color:'#fff'}}/>

        <h2 className="text-center mb-4">Delving Deeper</h2>
        <Row>
          {articles.map((article) => (
            <Col md={4} key={article.id} className="mb-4">
              <div className="article-card h-100 shadow-sm position-relative">
                <a href={article.link} target="_blank" rel="noopener noreferrer"> {/* Link with appropriate href */}
                  <img className="article-card-img" src={article.imgSrc} alt={article.title} />
                </a>
                <div className="article-card-body">
                  <button
                    className={`advert-card-like ${liked[article.id] ? 'liked' : ''}`}
                    onClick={() => handleLike(article.id)}
                    aria-label="Like"
                  >
                    <i className={`fa${liked[article.id] ? 's' : 'r'} fa-heart`}></i>
                  </button>
                  <h5 className="article-card-title">{article.title}</h5>
                  <p>{article.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default MagazineSection;
