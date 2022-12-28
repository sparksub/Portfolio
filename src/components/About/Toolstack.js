import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiApple,
    SiJetbrains,
    SiJupyter,
    SiPostman,
    SiFigma,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiApple />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;
