import React from 'react';
import { Link } from 'react-router-dom';
import ScrollGradient from '../components/atoms/ScrollGradient';

const LandingPage = () => {
  return (
    <div className='container'>
      <ScrollGradient />
      <div className='landing__text-container fade-in'>
        <span className='landing__text'>단순</span>
        <span className='landing__text-sub'>하게 주문하세요.</span>
      </div>
      <div className='jsx-container'>
        <div className='landing__gif-container fade-in'>
          <div className='landing__gif-btn'></div>
          <div className='landing__gif-btn second'></div>
          <video
            draggable='false'
            playsInline
            autoPlay
            loop
            className='landing__gif'
          >
            <source type='video/mp4' src='https://i.imgur.com/yFQRVvc.mp4' />
          </video>
        </div>
        <div className='landing__btn-container fade-in'>
          <Link className='landing__btn' to='/LandingPage2'>
            다음
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
