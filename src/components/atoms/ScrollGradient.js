import React from 'react';

const ScrollGradient = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '80px',
        position: 'fixed',
        bottom: '0%',
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 1) 40%',
        zIndex: '5',
      }}
    ></div>
  );
};

export default ScrollGradient;
