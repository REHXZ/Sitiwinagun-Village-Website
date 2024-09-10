import React from 'react';

const VirtualTour = () => {
  return (
    <div>
      {/* Your existing landing page content */}

      <div style={{ marginTop: '4rem' }}>
        <iframe
          title="Embedded Website"
          src="https://app.cloudpano.com/tours/t1LtFvj5DK"
          width="100%"
          height="500px"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VirtualTour;