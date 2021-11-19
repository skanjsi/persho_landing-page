import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='container'>
      <div className='landing__text-container fade-in'>
        <span className='landing__text-sub'>따라하다보면 </span>
        <span className='landing__text'>결제 </span>
        <span className='landing__text-sub'>성공!</span>
      </div>
      <div className='jsx-container'>
        <div className='landing__gif-container fade-in'>
          <div className='landing__gif-btn'></div>
          <div className='landing__gif-btn second'></div>
          <img
            className='landing__gif'
            src='https://i.ibb.co/HF9xCH0/pay.gif'
          ></img>
        </div>
        <div className='landing__btn-container fade-in'>
          <Link className='landing__btn' to='/LandingPage4'>
            다음
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
