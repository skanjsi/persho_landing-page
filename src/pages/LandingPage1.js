import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='container'>
      <div className='landing__text-container fade-in'>
        <span className='landing__text'>단순</span>
        <span className='landing__text-sub'>하게 주문하세요.</span>
      </div>
      <img
        className='landing__img fade-in delay-10'
        src='https://i.ibb.co/6F9Zc34/PERSHO-IMAGE.png'
      ></img>
      <div className='landing__btn-container fade-in delay-20'>
        <Link className='landing__btn' to='/LandingPage2'>
          다음
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
