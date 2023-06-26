import React from "react";
import developer from "../images/developer.jpg";

const Intro = () => {
  return (
    <div className="px-5 mx-5 mt-5">
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div>
          <div className="d-flex justify-content-start">
            <span className="primary-text-color yellow-bg p-3 rounded text-align-center fw-bold fs-5">
              J.A
            </span>
          </div>
          <div className="d-flex justify-content-between pt-3">
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <div className="text-uppercase primary-text-color">
                <h6 className="name-itro">Hello there my name is:</h6>
              </div>
              <div className="py-3 fw-bold fs-1">Joan Aluka</div>
              <div>
                <p className="fs-4">
                  I am a{" "}
                  <span className="fw-bold">Front-End Software Engineer</span>{" "}
                  with <span className="fw-bold">4+ years</span> of experience in designing & building both web
                  and mobile application
                </p>
              </div>
              <div>
                <button className="text-uppercase btn primary-color text-white py-3 fw-bold">
                  Download Resume
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid rounded"
                src={developer}
                alt="developer"
                // height="100"
                width="400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
