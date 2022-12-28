import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Subin Park </span>
            from <span className="purple"> Republic of Korea. </span>
            I am a 21(22)-year-old junior at
            <a href={"https://www.khu.ac.kr/eng/main/index.do"}> Kyung Hee University</a>
            ,
            <a href={"http://swcon.khu.ac.kr/wordpress/"}> Department of Software Convergence</a>
            . I am also a undergraduate research intern at
            <a href={"https://hcail.uos.ac.kr/index.html"}> Human-Centered Artificial Intelligence Lab </a>
            at the University of Seoul, under the supervision of
            <a href={"http://hyunggujung.com/index.html"}> Prof. Hyunggu Jung. </a>
            <br />
            <br />
            Apart from research, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Viewing Artworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Baseball Game
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Alternative Rock
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "the Lord will watch over your coming and going <br /> both now and forevermore."{" "}
          </p>
          <footer className="blockquote-footer">Psalm 121:8</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
