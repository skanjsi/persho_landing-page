import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IndexPage = () => {
  return (
    <div className='container'>
      <div className='text-container'>
        <div className='text'>구매할 물건을 입력해주세요.</div>
      </div>

      <div className='btn-container-solo'>
        <Link className='btn-main' to='/LandingPage1'>
          상품 검색하기
        </Link>
      </div>
    </div>
  );
};

export default IndexPage;
