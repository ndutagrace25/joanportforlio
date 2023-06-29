import React from "react";

const Navbar = () => {
  return (
    <div className="px-5 pt-4 d-flex justify-content-between nav-section">
      <div className="d-flex justify-content-start">
        <span className="primary-text-color yellow-bg p-3 rounded text-align-center fw-bold fs-5 nav-icon">
          J.A
        </span>
      </div>
      <div className="pe-3">
        <div
          className="primary-color p-3 rounded nav-icon fixed-icon"
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-bars fa-2xl text-white icon-size"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
