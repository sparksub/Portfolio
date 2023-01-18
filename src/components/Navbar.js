import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import Button from "react-bootstrap/Button";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);


  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href={"/"}>
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">

            {window.location.href.includes('/ko') === true ?(
                    <Nav.Item>
                      <Nav.Link as={Link} to={"/ko/"} onClick={() => updateExpanded(false)}>
                        <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                      </Nav.Link>
                    </Nav.Item>
                )
                :(
                    <Nav.Item>
                      <Nav.Link as={Link} to={"/"} onClick={() => updateExpanded(false)}>
                        <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                      </Nav.Link>
                    </Nav.Item>
                )}


            {window.location.href.includes('/ko') === true ?(
                <Nav.Item>
                  <Nav.Link
                      as={Link}
                      to={"/ko/project"}
                      onClick={() => updateExpanded(false)}
                  >
                    <AiOutlineFundProjectionScreen
                        style={{ marginBottom: "2px" }}
                    />{" "}
                    Projects
                  </Nav.Link>
                </Nav.Item>
            ):(
                <Nav.Item>
                  <Nav.Link
                      as={Link}
                      to={"/project"}
                      onClick={() => updateExpanded(false)}
                  >
                    <AiOutlineFundProjectionScreen
                        style={{ marginBottom: "2px" }}
                    />{" "}
                    Projects
                  </Nav.Link>
                </Nav.Item>
            )}


            {window.location.href.includes('/ko') === true ?(
                <Nav.Item>
                  <Nav.Link
                      as={Link}
                      to={"/ko/resume"}
                      onClick={() => updateExpanded(false)}
                  >
                    <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                  </Nav.Link>
                </Nav.Item>

            ):(
                <Nav.Item>
                  <Nav.Link
                      as={Link}
                      to={"/resume"}
                      onClick={() => updateExpanded(false)}
                  >
                    <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                  </Nav.Link>
                </Nav.Item>

            )}


            {window.location.href.includes('/ko') === true ?
                (<Nav.Item>
                  <Nav.Link
                      as={Link}
                      to={"/"}
                      onClick={() => updateExpanded(false)}
                  >
                    <Button
                        target="_blank"
                        className="fork-btn-inner-lang"
                    >
                      {"eng"}
                    </Button>
                  </Nav.Link>
                </Nav.Item>)
                :(<Nav.Item>
                  <Nav.Link
                      as={Link}
                      to={"/ko"}
                      onClick={() => updateExpanded(false)}
                  >
                    <Button
                        target="_blank"
                        className="fork-btn-inner-lang"
                    >
                      {"한글"}
                    </Button>
                  </Nav.Link>
                </Nav.Item>)
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
