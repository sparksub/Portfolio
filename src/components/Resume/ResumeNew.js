import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Subin_Park_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <img src={"https://user-images.githubusercontent.com/57142322/210320442-22c2a063-8d63-4e84-b9b0-249fdb9a415a.png"}
               alt="home pic"
               className="img-fluid"
               width={width}
          />
          {/*<Document file={"https://github.com/sparksub/HCAIL-Medical-FoodImage/files/10335005/Subin_Park_Resume.pdf"}>*/}
          {/*  <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />*/}
          {/*</Document>*/}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
