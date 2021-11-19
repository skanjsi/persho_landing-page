import React, { useEffect } from 'react';

const LandingPage = () => {
  return (
    <div className='container'>
      <div className='text-container'>
        <div className='text'>구매할 물건을 입력해주세요.</div>
      </div>

      <div className='btn-container-solo'>
        <div className='btn-main'>
          <a
            href='http://pf.kakao.com/_HBxfRb/chat'
            style='width: 100px; border-radius: 30px'
          >
            카카오톡 채팅하기
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
