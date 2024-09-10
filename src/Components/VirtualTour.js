import React from 'react';

const VirtualTour = () => {
  return (
    <div>
      {/* Your existing landing page content */}

      <div style={{ marginTop: '4rem' }}>
        <iframe
          title="Embedded Website"
          src="https://indonesiavirtualtour.com/storage/destination/nepal-van-java/src/index.htm"
          width="100%"
          height="500px"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ borderRadius: '12px', overflow: 'hidden' }} // Added styles for rounded corners
        ></iframe>
      </div>
    </div>
  );
};

export default VirtualTour;