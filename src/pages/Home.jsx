import React, { useState } from "react";
import { Navbar, Intro, AboutMe } from "../components";
import { Menu } from ".";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(null);

  return (
    <div className="main-container">
      {currentPage === "Menu" ? (
        <Fade top delay={255}>
          <div className="menu-page-bg primary-color">
            <div className="container-fluid">
              <Navbar
                setCurrentPage={() => setCurrentPage("Home")}
                icon="fa-sharp fa-regular fa-xmark"
                name_bg="bg-white shadow-sm"
                menu_bg="bg-secondary"
              />
              <div className="d-flex justify-content-center mt-4">
                <Menu />
              </div>
            </div>
          </div>
        </Fade>
      ) : (
        <>
          <Fade bottom delay={255}>
            <div className="container-fluid">
              <Navbar
                setCurrentPage={() => setCurrentPage("Menu")}
                icon="fas fa-bars"
                name_bg="yellow-bg"
                menu_bg="primary-color"
              />
              <Intro />
            </div>
            <AboutMe />
          </Fade>
        </>
      )}
    </div>
  );
};

export default Home;
