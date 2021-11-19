import React, { useEffect } from 'react';
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
      <img
        className='landing__img fade-in delay-10'
        src='https://i.ibb.co/6F9Zc34/PERSHO-IMAGE.png'
      ></img>
      <div className='landing__btn-container fade-in delay-20'>
        <Link className='landing__btn' to='/LandingPage3'>
          다음
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
