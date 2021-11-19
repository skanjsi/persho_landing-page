import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LandingPage = () => {
  const history = useHistory();

  const goNextStep = () => {
    history.push('/LandingPage3');
  };

  return (
    <div className='container'>
      <div className='text-container'>
        <div className='text'>구매할 물건을 입력해주세요.</div>
      </div>

      <div className='btn-container-solo'>
        <div className='btn-main' onClick={() => goNextStep()}>
          상품 검색하기
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
