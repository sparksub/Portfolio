import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import NavbarKo from "./components/NavbarKo";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";

import HomeKo from "./components/Home/ko/Home";
import AboutKo from "./components/About/ko/AboutKo";
import ProjectsKo from "./components/Projects/ko/Projects";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./components/ScrollToTop";

// const path = "/Portfolio";
const path = "";
const pathKo = "/ko";

function App() {
  const [load, updateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {window.location.href.includes('/ko') === true ?
            (<NavbarKo />)
          :(<Navbar />)
        }

        <ScrollToTop />
        <Switch>
          {/*ENGLISH*/}
          <Route path={path+"/"} exact component={Home} />
          <Route path={path+"/project"} component={Projects} />
          <Route path={path+"/about"} component={About} />
          <Route path={path+"/resume"} component={Resume} />

          {/*KOREAN*/}
          <Route path={pathKo+"/"} exact component={HomeKo} />
          <Route path={pathKo+"/project"} component={ProjectsKo} />
          <Route path={pathKo+"/about"} component={AboutKo} />
          <Route path={pathKo+"/resume"} component={Resume} />
        </Switch>
        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;
