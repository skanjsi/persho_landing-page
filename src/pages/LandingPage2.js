import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='container'>
      <div className='landing__text-container fade-in'>
        <span className='landing__text'>1분</span>
        <span className='landing__text-sub'>안에 </span>
        <span className='landing__text'>회원가입</span>
        <span className='landing__text-sub'>하세요.</span>
      </div>
      <div className='jsx-container'>
        <div className='landing__gif-container fade-in'>
          <div className='landing__gif-btn'></div>
          <div className='landing__gif-btn second'></div>
          <img
            className='landing__gif'
            src='https://i.ibb.co/kDwZ3Dp/Nov-19-2021-22-37-28.gif'
          ></img>
        </div>
        <div className='landing__btn-container fade-in'>
          <Link className='landing__btn' to='/LandingPage3'>
            다음
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
