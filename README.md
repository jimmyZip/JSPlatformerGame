# JSPlatformerGame
ECMAScript(이하 JS 또는 JavaScript)기반으로 작성한 HTML5, CSS3구동 Platformer Game ver1 입니다.

<h2>프로젝트명 Thanos Run</h2>
<img src="https://postfiles.pstatic.net/MjAxOTA2MTJfMjE1/MDAxNTYwMjY4NDk1Njc4.hwaQOTOTX_4-d73cJvjwGP4OKdsV05NhAaoLLFoJXdAg.pd3Gu6yBtdApQ5QkzXVBnTbfvYkjd70UDDQa6uivSWgg.JPEG.wlsghd1028/slide01.JPG?type=w580"/>

<ul>
  <li>
    개발기간 1차 : 2018-11-30 ~ 2019-12-14
  </li>
  <li>
    개발기간 2차 : 2019-06-03 ~ 2019-06-09<br>
    사유 : 1차 프로젝트 데이터 소실로 인한 재개발
  </li>
  <li>
    개발환경 : JavaScript, HTML5, CSS3 
  </li>
  <li>
    개발목표<br>
    - ECMAScript2015 이후부터 제공하는 Class, constructor, 상속을 통해 객체 숙달
    - Java가 지원하는 Rect객체를 JavaScript로 모방해 구현함으로써 충돌체크 로직을 숙달하고, java를 간접학습
    - HTML5 / CSS3 / JavaScript를 사용함으로써 프론트엔드 및 프로그래밍 실력향상
    - 쉬운 동작으로 하나로 즐기는 횡스크롤 플랫포머 게임 stage1 구현
  </li>
</ul>
<section>
  <h2>첨부이미지 및 설명</h2>
  <article>
    <h3>게임 화면 캡쳐</h3>
    <hr/>
    <div>
      <p>
        <img src="https://postfiles.pstatic.net/MjAxOTA2MTJfMjg0/MDAxNTYwMjY4NDk2NDAx.04pgIsbsY03h5T6Sp8sTAVx1yk0SZQS36kg3E-w2OzEg.OSzMhmRV2dVygFvlMNoXvOTjKCboV_WjcmvS7C9zUJcg.JPEG.wlsghd1028/slide13.JPG?type=w580"/>
      </p>
      <p>
        랜딩페이지를 제작하여 게임화면과 분리하고 메인페이지 역할을 합니다.<br/>
        intro, score를 확인할 수 있습니다.
      </p>
    </div>
    
    <div>
      <p>
        <img src="https://postfiles.pstatic.net/MjAxOTA2MTJfMTQ4/MDAxNTYwMjY4NDk2NDMw.f63t2aOfMONWwDuEtJnuHTUTTdJJehUDCYUxC7yJPeog.KLq7rw6KFxhKFnlYjvPqwKhpp_m42SfHizG8DlZEXTUg.JPEG.wlsghd1028/slide14.JPG?type=w580"/>
      </p>
    </div>    
  </article>
  <article>
    <h3>주요 코드</h3>
    <hr/>
    <ul>
      <li>
        <h4>게임에 등장하는 Object 상속관계 및 생성 예시</h4>
        <p>
          <img src="https://postfiles.pstatic.net/MjAxOTA2MTJfMjY0/MDAxNTYwMjY4NDk2NDU1.Ph4oZT8yQZH39lZevjGWem-1SOj6TASJzGDvO1qDLtEg.rTIOCBZa1a5kxIGbyynxWF0jNW4JmesmldDY5jaldbQg.JPEG.wlsghd1028/slide16.JPG?type=w580"/>
        </p>
      </li>
      <li>
        <h4>생성된 instance를 관리하는 ObjectManager클래스</h4>
        <p>
          <img src="https://postfiles.pstatic.net/MjAxOTA2MTJfNTQg/MDAxNTYwMjY4NDk2NTQ0.bzor7-qjSzG0-4Ql_A-4j0W6vbZHcUyPmYVksSIQOKQg._WWmwjy7Wwg-xkE2FPHVMwLfNfRd_o5rngdQkhGaESMg.JPEG.wlsghd1028/slide17.JPG?type=w580"/>
        </p>
      </li>
      <li>
        <h4>주인공 및 게임 조작관련</h4>
        <p>
           <img src="https://blogfiles.pstatic.net/MjAxOTA2MTJfMjQy/MDAxNTYwMjY4NDk3MTg1.2Xcrlp3uBg66Cj-mLIcvPrmn4JBjU07Tm5c2bvDg-fsg.VeBmwyENRH3LpKiNZ-mwxWgbJ5ND0WaRtYWsgbS31V8g.JPEG.wlsghd1028/slide18.JPG"/>
        </p>
      </li>
      <li>
        <h4>객체간 충돌검사</h4>
        <ol>
          <li>Sensor클래스로부터 sensor 인스턴스 생성</li>
          <li>주인공 element를 둘러쌀 sensor element 부착</li>
          <li>주인공과 충돌대상 객체간 위치값에 따른 충돌여부 검사</li>
          <li>충돌결과에 따라 조정된 변수값을 통해 해당 작업 처리</li>
          <li>예시) Hero에 부착된 bottomSensor가 floor와 닿았으니 착지 및 걷는 효과 적용</li>
        </ol>
        <p>
          <img src="https://postfiles.pstatic.net/MjAxOTA2MTJfMjAw/MDAxNTYwMjY4NDk2NTYz.AYyDHjgeuttkHQY_eVHAieXUsn3dhuFt32vcwL7OZZkg.iCFDIgBJzoeVhtfiEIFYG3MBCF_pLNXUhNGX1TqFsAAg.JPEG.wlsghd1028/slide19.JPG?type=w580"/>
        </p>
        <p>
          <img src="https://postfiles.pstatic.net/MjAxOTA2MTJfMjAw/MDAxNTYwMjY4NDk2NTYz.AYyDHjgeuttkHQY_eVHAieXUsn3dhuFt32vcwL7OZZkg.iCFDIgBJzoeVhtfiEIFYG3MBCF_pLNXUhNGX1TqFsAAg.JPEG.wlsghd1028/slide20.JPG?type=w580"/>
        </p>
        <p>
          <img src="https://postfiles.pstatic.net/MjAxOTA2MTJfMTAw/MDAxNTYwMjY4NDk3MjE0.O0p83Qf5IjOHc4b7R1s-uXzjkLBDEpFApvAYjDfVjXsg.S4R76RABuqbRtes9D2as8ZFbBWOfgphwlt5ZCGnKEgsg.JPEG.wlsghd1028/slide21.JPG?type=w580"/>
        </p>
      </li>
      <li>
        <h4>게임 엔진, timer함수, flag역할 boolean타입 변수</h4>
        <p>
          <img src="https://postfiles.pstatic.net/MjAxOTA2MTJfMjc3/MDAxNTYwMjY4NDk3MTQ2.Dn1MQqLFS9C8YfWTEzYtLHXX_YdaMOt_L3Vt2sWmWdMg.xusbiPyxSGbMVEW0vnSTe4NgdrNa6Ypo2jCIAtyYWR0g.JPEG.wlsghd1028/slide22.JPG?type=w580"/>
        </p>
      </li>
    </ul>
  </article>
  <article>
    <h3>game introduction</h3>
    <dl>
      <dt>타노스런 스토리 및 게임방법</dt>
      <dd>
        <p><img src="https://postfiles.pstatic.net/MjAxOTA2MTJfODYg/MDAxNTYwMjY4NDk2MTA1.zabTVEIb14rfXLPUJV0U8hAUV8zebozTDXIOXMdzXxsg.pgoE_YOk2x4d6cGcJDqRpIgCZKCuCEOWZAlp0Ypntnsg.JPEG.wlsghd1028/slide10.JPG?type=w580"/></p>
        <p><img src="https://postfiles.pstatic.net/MjAxOTA2MTJfODMg/MDAxNTYwMjY4NDk2MTAz.bWaF5AZUTUTm_NbL60_Jk4cQZ1qRBVTTQf5CH76tHL0g.4Y7hAeTpiJ7UJdB2S1HD1Qb8CtF7SGaxLa5BVdrSaMsg.JPEG.wlsghd1028/slide11.JPG?type=w580"/></p>
        <p><img src="https://postfiles.pstatic.net/MjAxOTA2MTJfMTU5/MDAxNTYwMjY4NDk2MTM5.W-V06rGF5XlRAEXPtLtUXn9gfAoPIaFUC4vrU6oMZBYg.7v-UxR0SjgszGLH2kr0lGw4WfhywG71aFn2IvG6fB3Qg.JPEG.wlsghd1028/slide12.JPG?type=w580"/></p>
      </dd>
    </dl>
  </article>
</section>
