import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal, BiVideo } from "react-icons/bi";
import { SiGithub } from "react-icons/si";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
          {
              props.isLink1 === "video" ? (
                      <Button variant="primary" href={props.link1} target="_blank">
                          <BiVideo /> &nbsp;
                          {"Demo"}
                      </Button>
              ) : (<></>)
          }
          {
              props.isLink1 === "github" ? (
                  <Button variant="primary" href={props.link1} target="_blank">
                      <SiGithub /> &nbsp;
                      {"Github"}
                  </Button>
              ) : (<></>)
          }
          {
              props.isLink1 === "paper" ? (
                  <Button variant="primary" href={props.link1} target="_blank">
                      <BiLinkExternal /> &nbsp;
                      {"Paper"}
                  </Button>
              ) : (<></>)
          }
          {
              props.isLink2 === "video" ? (
                  <Button variant="primary" href={props.link2} target="_blank">
                      <BiVideo /> &nbsp;
                      {"Demo"}
                  </Button>
              ) : (<></>)
          }
          {
              props.isLink2 === "github" ? (
                  <Button variant="primary" href={props.link2} target="_blank">
                      <SiGithub /> &nbsp;
                      {"Github"}
                  </Button>
              ) : (<></>)
          }
          {
              props.isLink2 === "paper" ? (
                  <Button variant="primary" href={props.link2} target="_blank">
                      <BiLinkExternal /> &nbsp;
                      {"Paper"}
                  </Button>
              ) : (<></>)
          }
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
