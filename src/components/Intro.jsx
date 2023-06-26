import React from "react";
import developer from "../images/developer.jpg";

const Intro = () => {
  return (
    <div className="px-5 mx-5 mt-5 pb-3">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div className="intro-width">
          <div className="d-flex justify-content-between pt-3">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <div className="text-uppercase primary-text-color">
                <h6 className="name-itro">Hello there my name is:</h6>
              </div>
              <h1 className="py-3 fw-bold actual-name">Hey There</h1>
              <div>
                <p className="fs-4 intro-info">
                  I am a{" "}
                  <span className="fw-bold">Front-End Software Engineer</span>{" "}
                  with <span className="fw-bold">3+ years</span> of experience
                  in designing & building both web and mobile application
                </p>
              </div>
              <div className="download-section">
                <button className="text-uppercase btn primary-color text-white py-3 fw-bold download-btn">
                  <span className="btn-font">
                    Download Resume <i className="fas fa-download ps-2"></i>
                  </span>
                </button>
              </div>
            </div>
            <div className="col-md-6 mobile-image-hide d-flex justify-content-center">
              <img
                className="img-fluid rounded"
                src={developer}
                alt="developer"
                // height="100"
                width="300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
