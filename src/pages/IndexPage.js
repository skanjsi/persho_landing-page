import React from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div className='container'>
      <div className='landing__text-container fade-in'>
        <span className='landing__text-sub'>처음이어도</span>
        <br />
        <span className='landing__text'> 누구나 </span>
        <span className='landing__text-sub'>할 수 있어요.</span>
      </div>
      <img
        className='landing__img fade-in delay-10'
        src='https://i.ibb.co/6F9Zc34/PERSHO-IMAGE.png'
      ></img>
      <div
        className='landing__text-container fade-in delay-10'
        style={{ padding: '20px 0 70px 0' }}
      >
        <div
          className='landing__text-sub'
          style={{ color: 'var(--black)', fontWeight: 'bold' }}
        >
          온라인 쇼핑이 처음인 6,70대
        </div>
        <span
          className='landing__text'
          style={{ fontSize: '42px', lineHeight: '52px', color: 'var(--red)' }}
        >
          87%{' '}
        </span>
        <span
          className='landing__text-sub'
          style={{ color: 'var(--black)', fontWeight: 'bold' }}
        >
          가 성공했어요.
        </span>
      </div>
      <div className='landing__btn-container fade-in delay-20'>
        <Link className='landing__btn' to='/LandingPage1'>
          다음
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
