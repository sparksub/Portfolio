import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../ProjectCards";
import Particle from "../../Particle";

import projects from "./ProjectsList"

function ProjectsKo() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "black" }}>
          최근까지 진행한 프로젝트들을 정리해두었습니다.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
              projects.map((project)=>(
                  <Col md={4} className="project-card">
                      <ProjectCard
                          imgPath={project.imgPath}
                          isBlog={false}
                          title={project.title}
                          description={project.description}
                          isLink1={project.isLink1}
                          link1={project.link1}
                          isLink2={project.isLink2}
                          link2={project.link2}
                      />
                  </Col>
              ))
          }
        </Row>
      </Container>
    </Container>
  );
}

export default ProjectsKo;
