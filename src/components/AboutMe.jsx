import React, { useState } from "react";

const AboutMe = ({ aboutDivRef }) => {
  const [bgCard, setBgCard] = useState(null);
  const [bgCardTwo, setBgCardTwo] = useState(null);
  return (
    <div className="yellow-bg" ref={aboutDivRef}>
      <div className="container p-5">
        <h6 className="primary-text-color fw-bold about-header">ABOUT ME</h6>
        <div className="my-3">
          <h1 className="text-black fw-bold skill-header">
            Think, Make, Solve
          </h1>
        </div>
        <div className="d-flex justify-content-between mt-5 flex-wrap project-card">
          <div
            className={"border col-md-5 p-5 border-black " + bgCard}
            onMouseEnter={() => setBgCard("bg-white")}
            onMouseLeave={() => setBgCard(null)}
          >
            <div className="bg-black p-1 rounded col-md-1 mb-2 d-flex justify-content-center">
              <i className="fa-solid fa-terminal text-white"></i>
            </div>
            <p>
              My mission as a Software Engineer is to deliver elegant and
              efficient solutions that translate Good Design into Good Business
              and even better user experiences.
            </p>
          </div>
          <div
            className={"border col-md-5 p-5 about-m border-black " + bgCardTwo}
            onMouseEnter={() => setBgCardTwo("bg-white")}
            onMouseLeave={() => setBgCardTwo(null)}
          >
            <div className="bg-black p-1 rounded col-md-1 mb-2 d-flex justify-content-center">
              <i className="fa-solid fa-user text-white"></i>
            </div>
            <p>
              When i'm not at my desk, i'll be out on the occasional road-trip
              or playing golf, recently i've started working on small
              wood-working projects, and whenever i can, i enjoy hiking &
              camping.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
