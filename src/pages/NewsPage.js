import React from 'react';
import { useHistory } from 'react-router-dom';

const NewsPage = () => {
  const history = useHistory();

  const goNextStep = () => {
    history.push('/');
  };
  return (
    <div
      className='container'
      style={{
        paddingTop: '40px',
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        height: 'auto',
      }}
    >
      <div className='news-header'>
        <div className='news-header-text'>경제신문</div>
      </div>
      <div className='text-container' style={{ padding: '20px 0 20px 0' }}>
        <div className='text'>
          수능 전 카톡 선물로 가장 많이 보낸 것…엿·찹쌀떡 아니다
        </div>
        <div className='text-sub'>
          "엿·찹쌀떡 1위 아냐"…가장 많이 팔린 수능선물은?
        </div>
      </div>
      <div className='news-text-container'>
        <img
          className='news-img'
          src='https://file.mk.co.kr/meet/neds/2021/11/image_readtop_2021_1084486_16372927384856131.jpg'
          alt=''
        />
        <div
          className='news-text'
          style={{ fontSize: '12px', lineHeight: '120%', marginBottom: '10px' }}
        >
          18일 오후 서울 이화여자외국어고등학교에서 대학수학능력시험을 마친
          수험생들이 시험장을 나서고 있다. [사진 = 이승환 기자]
        </div>
        <div className='news-text'>
          올해 대학수학능력시험(수능) 시즌 선물로 카카오톡 선물하기에서 가장
          많이 팔린 선물은 케이크가 1위를 차지했다. 19일 카카오톡 선물하기에
          따르면 전날 치러진 수능을 앞두고 11월 12일부터 17일까지 선물하기에서
          진행한 수능 기획전의 선물 거래 데이터를 분석한 결과 케이크가 엿,
          찹쌀떡을 제치고 가장 많은 거래액을 차지했다. 전통적인 합격 기원 선물인
          엿, 찹쌀떡 초콜릿의 경우 단품보다는 '엿+찹쌀떡+초콜릿',
          '찹쌀떡+디저트' 등 세트 구성 상품이 상위에 이름을 올렸다. 새로운 선물
          문화 영향으로 케이크가 전통 선물을 제친 것으로 풀이된다.
        </div>
        <a style={{ position: 'relative' }} onClick={() => goNextStep()}>
          <div className='news-ad-text'>광고</div>
          <img
            style={{
              width: '100%',
              margin: '5px 0',
              border: '1px solid black',
            }}
            src='https://i.ibb.co/nCGc3kR/1200-1200-2.jpg'
            alt=''
          />
        </a>
        <div className='news-text'>
          케이크가 가장 많이 주고받은 선물이 된 이유로는 수능 기간 수험생과 함께
          고생한 학부모를 챙기는 문화가 지속됐기 때문이라고 분석했다. 가족끼리
          모여 수험생을 응원하고 함께 나눠 먹을 수 있는 케이크가 많은 선택을
          받은 것으로 보인다. 수능을 하루 앞둔 지난 17일 40~50대 이용자 간
          주고받은 선물 수량은 지난달 일평균 대비 260% 증가했다. 수능 시즌에
          중장년층의 선물 구매 활동성이 높다는 것을 확인할 수 있는 대목이다.
          구매 품목에서도 차이가 있다. 10대 간 주고받은 선물 1위~5위는 초콜릿,
          아이스 찹쌀떡, 아이스크림 등 단품 위주였다.
        </div>
        <div className='news-text'>
          40대 간 가장 많이 선물한 제품은 케이크, 카페 교환권, 찹쌀떡+엿+초콜릿
          선물세트로 구성됐다. 이외에도 마카롱, 치킨, 백화점 교환권 등 디저트나
          실용성이 강조된 상품들도 구매로 이어졌다. 카카오톡 선물하기 관계자는
          "코로나19 영향으로 직접 만나 선물을 전해주기보다는 비대면으로 선물하는
          추세가 지속되고 있다"며 "수능 선물도 수험생들 못지않게 뒤에서 묵묵히
          고생한 학부모와 가족을 응원하는 트렌드로 변하고 있다"고 말했다.
        </div>
        <div className='news-text' style={{ textAlign: 'right' }}>
          [최아영 매경닷컴 기자]
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
