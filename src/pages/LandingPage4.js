import React from 'react';

const LandingPage = () => {
  return (
    <div className='container' style={{ justifyContent: 'space-between' }}>
      <div
        className='landing__text-container fade-in'
        style={{ marginTop: '60px', marginBottom: '10px' }}
      >
        <div
          className='landing__text'
          style={{
            fontSize: '56px',
            lineHeight: '80px',
            color: 'var(--black)',
          }}
        >
          홈비
        </div>
        <span
          className='landing__text-sub'
          style={{
            fontSize: '22px',
            fontWeight: 'bold',
            color: 'var(--blackbrown)',
          }}
        >
          간편하고 안전한 쇼핑 서비스
        </span>
      </div>
      <img
        className='landing__img fade-in delay-10'
        style={{ width: '280px' }}
        src='https://i.ibb.co/cQD7sJm/Persho-App-Icon.png'
      ></img>
      <div
        className='landing__btn-container fade-in delay-15'
        style={{ height: '60px' }}
      >
        <a
          className='landing__btn'
          style={{ borderRadius: '12px' }}
          href='https://nzpvdy8ly2u.typeform.com/to/arLUtwIc'
        >
          간편 쇼핑하기
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
