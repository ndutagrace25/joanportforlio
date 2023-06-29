import React from "react";
import { Navbar, Intro, AboutMe } from "../components";

const Home = () => {
  return (
    <div className="main-container">
      <div className="container-fluid">
        <Navbar />
        <Intro />
      </div>
      <AboutMe />
    </div>
  );
};

export default Home;
