import React, { useState } from 'react';

const locations = [
  { name: 'Tirana', top: '48%', left: '47%', details: 'Capital of Albania.' },
  { name: 'Durrës', top: '40%', left: '45%', details: 'Port city known for its ancient amphitheater.' },
  { name: 'Vlora', top: '75%', left: '45%', details: 'Coastal city with beautiful beaches.' },
  { name: 'Shkodra', top: '15%', left: '45%', details: 'Historic city near Lake Shkodra.' },
  { name: 'Gjirokastra', top: '48%', left: '47%', details: 'Capital of Albania.' },
  { name: 'Saranda', top: '40%', left: '45%', details: 'Port city known for its ancient amphitheater.' },
  { name: 'Korca', top: '75%', left: '45%', details: 'Coastal city with beautiful beaches.' },
];

const StaticMap = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="mobile" style={{ position: 'relative', height: '500px', width: '100%' }}>
      {/* Map container */}
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundImage: `url('https://www.worldmaphd.com/albania/albania-map.png')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          position: 'absolute',
        }}
      >
        {/* Markers for locations */}
        {locations.map((location, idx) => (
          <div
            key={idx}
            onClick={() => handleLocationClick(location)}
            style={{
              position: 'relative',
              top: location.top,
              left: location.left,
              width: '20px',
              height: '20px',
              backgroundColor: 'red',
              borderRadius: '50%',
              cursor: 'pointer',
              transform: 'translate(-50%, -50%)', // Center the marker on the position
              zIndex: 3,
            }}
          />
        ))}

        {/* Names of locations */}
        {locations.map((location, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              top: `calc(${location.top} + 25px)`, // Adjust the offset to place names above dots
              left: `calc(${location.left} - 10px)`,
              backgroundColor: 'white',
              padding: '2px 5px',
              borderRadius: '3px',
              boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
              fontSize: '12px',
              zIndex: 2,
              cursor: 'default',
            }}
          >
            {location.name}
          </div>
        ))}

        {/* Details overlay */}
        {selectedLocation && (
          <div
            style={{
              position: 'absolute',
              top: '60%',
              left: '20%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '10px',
              borderRadius: '5px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
              zIndex: 1,
            }}
          >
            <h4>{selectedLocation.name}</h4>
            <p>{selectedLocation.details}</p>
            <button onClick={() => setSelectedLocation(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaticMap;
