import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCardKo() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            안녕하세요, <span className="purple">박수빈 </span>입니다.
            <a href={"https://www.khu.ac.kr/eng/main/index.do"}> 경희대학교 </a>
            <a href={"http://swcon.khu.ac.kr/wordpress/"}> 소프트웨어융합학과 </a>
            에서 데이터 사이언스를 전공하고 있습니다.
            또한 서울시립대학교의
            <a href={"https://hcail.uos.ac.kr/index.html"}> Human-Centered Artificial Intelligence Lab </a>
            에서
            <a href={"http://hyunggujung.com/index.html"}> 정형구 교수님 </a>
            지도를 받으며 학부연구생으로 연구하고 있습니다.
            <br />
            <br />
            연구 이외에도, 다양한 활동들을 좋아해요!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 예술 작품 감상하기
            </li>
            <li className="about-activity">
              <ImPointRight /> 한국 프로야구 관람하기
            </li>
            <li className="about-activity">
              <ImPointRight /> 얼터너티브 록 듣기
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "여호와께서 너의 출입을 <br /> 지금부터 영원까지 지키시리로다"{" "}
          </p>
          <footer className="blockquote-footer">시편 121:8</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCardKo;
