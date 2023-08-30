import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import {FaGoogle, FaLinkedinIn} from "react-icons/fa";

function Home2Ko() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                HCI and UX! 저는 사람들을 돕는 기술에 관심이 많아요 👊🏻
                <br />
                <br />
                지금은 학부에서 데이터 사이언스📚를 전공하고 있습니다.
                특히,
                <i>
                  <b className="purple"> Human-Centered Interaction, Accessibility, Qualitative, Quantitative Research </b>
                </i>
                가 융합된 분야에서 연구와 개발을 해오고 있습니다.
                <br />
                <br />
                저는
                <i>
                  <b className="purple"> Flutter, Swift, React </b>
                </i>
                를 사용해 웹&앱의 UI를 주로 개발합니다.
                모든 프로젝트에서 디자인은 제가 직접 할 정도로 디자인에도 관심이 많습니다.
                <br />
                <br />
                유화를 좋아해서 미술 전시회 🖼 를 열심히 보러다니고, 한국 프로야구 ⚾ 도 열심히 챙겨봅니다!
                <br />
                현재, 현대자동차정몽구재단의 온드림 장학생으로 활동하고 있습니다.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" style={{ width: "250px" }} />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                궁금한 점이 있다면 얼마든지, <span className="purple">connect </span>with me!
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/sparksub"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://scholar.google.com/citations?hl=en&user=Imo_RyYAAAAJ"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <FaGoogle />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://twitter.com/subin_park__"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/dariasubin/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                {/*<li className="social-icons">*/}
                {/*  <a*/}
                {/*      href="https://www.instagram.com/subin_park__/"*/}
                {/*      target="_blank"*/}
                {/*      rel="noreferrer"*/}
                {/*      className="icon-colour  home-social-icons"*/}
                {/*  >*/}
                {/*    <AiFillInstagram />*/}
                {/*  </a>*/}
                {/*</li>*/}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}
export default Home2Ko;
