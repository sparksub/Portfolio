import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
} from "react-icons/di";
import {SiFlask, SiFlutter, SiSwift} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <SiFlutter />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSwift />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiFlask />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiPython />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

    </Row>
  );
}

export default Techstack;
