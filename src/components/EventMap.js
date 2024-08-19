import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const locations = [
  {
    name: 'Tirana',
    top: '48%',
    left: '47%',
    details: "Albania's vibrant capital, Tirana, is known for its eclectic mix of Ottoman, Italian, and Soviet-era architecture.The city buzzes with energy,lively markets, and bustling cafes. Key sights include Skanderbeg Square, the National History Museum, and the Et'hem Bey Mosque. Tirana offers a dynamic blend of history & modern culture.",
    image: 'https://cdn.britannica.com/35/195935-050-456D7CBC/Skanderbeg-Square-Tirana-Albania.jpg'
  },
  {
    name: 'Durres',
    top: '42%',
    left: '43%',
    details: 'This historic port city is famed for its ancient amphitheater, one of the largest in the Balkans. Durrës offers a rich blend of history and coastal charm with its picturesque waterfront, lively markets, and beautiful beaches. Key attractions include the Roman Amphitheater, the Venetian Tower, and the Archaeological Museum.',
    image: 'https://emerging-europe.com/wp-content/uploads/2018/05/ah_48hours_durres_1_bigstockphoto.jpg'
  },
  {
    name: 'Vlora',
    top: '75%',
    left: '45%',
    details: 'Where the Adriatic and Ionian Seas meet, Vlora features stunning beaches and a lively promenade. Key attractions include the Independence Monument, Vlora Fortress, and scenic views from the surrounding hills.',
    image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/467206915.jpg?k=282cb3eab67f6b46db58fb4c6c29d1ea0f6f7d5edf37e8ba082e741f13cc5306&o=&hp=1'
  },
  {
    name: 'Shkodra',
    top: '20%',
    left: '45%',
    details: 'Nestled near the scenic Lake Shkodra, this city is renowned for its rich history and stunning landscapes. Shkodra boasts impressive landmarks such as the historic Rozafa Castle and the vibrant pedestrian area of the city center. It’s a gateway to the natural beauty of the surrounding mountains and lakes.',
    image: 'https://albaniatouristplaces.com/wp-content/uploads/2023/03/castle-of-shkodra-atp.jpg'
  },
  {
    name: 'Gjirokastra',
    top: '75%',
    left: '50%',
    details: "Gjirokastra, known for its Ottoman-era architecture, is a UNESCO World Heritage Site. Its castle offers panoramic views and insight into the region's history. The city’s preserved old town and vibrant bazaar make it a unique cultural destination.",
    image: 'https://feel-albania.com/wp-content/uploads/2019/10/Gjirokaster-City-in-UNESCO.jpg'
  },
  {
    name: 'Korca',
    top: '65%',
    left: '58.5%',
    details: 'Korçë, often called the City of Serenades, is renowned for its charming architecture and vibrant cultural scene. The city hosts numerous festivals and has a rich history. Its lively atmosphere and local cuisine make it a delightful visit.',
    image: 'https://greecerally.gr/wp-content/uploads/2023/05/Korce-Coriza-Albania.jpg'
  },
  {
    name: 'Saranda',
    top: '87%',
    left: '50%',
    details: 'Sarandë is a picturesque coastal city in southern Albania, offering stunning views of the Ionian Sea. Known for its beautiful beaches and vibrant nightlife, it’s a gateway to the ancient ruins of Butrint and the scenic Llogara Pass. Perfect for sunbathing and exploring historical sites.',
    image: 'https://images.myguide-cdn.com/albania/companies/transfer-from-tirana-airport-to-sarande-and-ksamil/large/transfer-from-tirana-airport-to-sarande-and-ksamil-3521694.jpg'
  },
  {
    name: 'Kukes',
    top: '23%',
    left: '54%',
    details: 'Kukes, nestled in northern Albania, is known for its stunning natural beauty and mountainous terrain. The region is ideal for hiking and exploring traditional Albanian villages. Kukes offers a peaceful escape with its scenic landscapes.',
    image: 'https://tiataxi.al/wp-content/uploads/2019/12/Qyteti_i_Kukesit_dimer.jpg'
  },
  {
    name: 'Diber',
    top: '40%',
    left: '50%',
    details: 'Diber is a picturesque region surrounded by mountains and lush landscapes. Its rich cultural heritage is reflected in local traditions and historical sites. Enjoy outdoor activities and explore the regions traditional villages.',
    image: 'https://www.shutterstock.com/image-photo/view-one-most-beautiful-roads-600nw-2302956601.jpg'
  },
  {
    name: 'Elbasan',
    top: '57%',
    left: '50%',
    details: 'Elbasan is a historic city in central Albania known for its ancient Roman ruins and Ottoman-era architecture. The city’s vibrant bazaar and local cuisine reflect its rich cultural heritage. Explore the Elbasan Fortress and enjoy the blend of old and new.',
    image: 'https://albania360.com/wp-content/uploads/2021/02/elb.jpg'
  },
];

const EventMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <section className='nr1'>
      <div className="map-container">

        <div className="map">

          {locations.map((location, idx) => (
            <div
              key={idx}
              className="marker"
              onClick={() => handleLocationClick(location)}
              style={{
                top: location.top,
                left: location.left,
              }}
            />
          ))}

          {locations.map((location, idx) => (
            <div
              key={idx}
              className="location-name"
              style={{
                top: `calc(${location.top} + 25px)`,
                left: `calc(${location.left} - 10px)`,
              }}
            >
              {location.name}
            </div>
          ))}

{selectedLocation && (
        <div className="details-overlay">
          <img src={selectedLocation.image} alt={selectedLocation.name} className="details-image" />
          <div className="details-content">
            <h4>{selectedLocation.name}</h4>
            <p>
              {selectedLocation.details}<br /><hr />
              <Link to={`/${selectedLocation.name}`} className="explore-more-link">
                <span> Explore More </span>
              </Link>
            </p>
            <button onClick={() => setSelectedLocation(null)}>Close</button>
          </div>
        </div>
      )}
        </div>
      </div>
    </section>
  );
};

export default EventMap;
