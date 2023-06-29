import React from "react";

const Menu = () => {
  return (
    <div>
      <h1 className="text-black fw-bold menu-title">MENU</h1>
      <div className="d-flex justify-content-between mt-5">
        <div>
          <div
            className="d-flex flex-row align-items-center"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-regular fa-envelope fa-lg primary-text-color"></i>
            <div className="ps-3">mmbonojoan@gmail.com</div>
          </div>
          <div
            className="d-flex flex-row align-items-center py-3"
            style={{ cursor: "pointer" }}
          >
            <i class="fa-regular fa-message fa-lg primary-text-color"></i>
            <div className="ps-3">+254 718 149 079</div>
          </div>
          <div
            className="d-flex flex-row align-items-center pb-3"
            style={{ cursor: "pointer" }}
          >
            <i class="fa-brands fa-linkedin fa-lg primary-text-color"></i>
            <div className="ps-3">Linkedin</div>
          </div>
          <div
            className="d-flex flex-row align-items-center"
            style={{ cursor: "pointer" }}
          >
            <i class="fa-brands fa-square-github fa-lg primary-text-color"></i>
            <div className="ps-3">Github</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Menu;
