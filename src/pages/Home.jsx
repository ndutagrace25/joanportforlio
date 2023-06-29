import React, { useState, useRef, useLayoutEffect } from "react";
import { Navbar, Intro, AboutMe } from "../components";
import { Menu } from ".";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(null);
  const hiddenDivRef = useRef(null);

  const scrollToDiv = () => {
    setCurrentPage(null);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useLayoutEffect(() => {
    if (hiddenDivRef.current) {
      if (!currentPage) {
        hiddenDivRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [currentPage]);

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
                <Menu scrollToDiv={scrollToDiv} />
              </div>
            </div>
          </div>
        </Fade>
      ) : (
        <div>
          <div className="container-fluid">
            <Fade bottom delay={255}>
              <Navbar
                setCurrentPage={() => setCurrentPage("Menu")}
                icon="fas fa-bars"
                name_bg="yellow-bg"
                menu_bg="primary-color"
              />
              <Intro />
            </Fade>
          </div>
          <AboutMe hiddenDivRef={hiddenDivRef} />
        </div>
      )}
    </div>
  );
};

export default Home;
