import React from "react";

const Menu = () => {
  return (
    <div className="menu-mobile">
      <h1 className="text-black fw-bold menu-title">MENU</h1>
      <div className="d-flex justify-content-between mt-5 flex-wrap arrange-mobile">
        <div className="arrange-desktop">
          <div
            className="d-flex flex-row align-items-center"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-regular fa-envelope fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">mmbonojoan@gmail.com</div>
          </div>
          <div
            className="d-flex flex-row align-items-center py-3"
            style={{ cursor: "pointer" }}
          >
            <i class="fa-regular fa-message fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">+254 718 149 079</div>
          </div>
          <div
            className="d-flex flex-row align-items-center pb-3"
            style={{ cursor: "pointer" }}
          >
            <i class="fa-brands fa-linkedin fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">Linkedin</div>
          </div>
          <div
            className="d-flex flex-row align-items-center"
            style={{ cursor: "pointer" }}
          >
            <i class="fa-brands fa-square-github fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">Github</div>
          </div>
        </div>
        <div className="arrange-mobile arrange-mobile">
          <ul className="text-uppercase fw-bold menu-list">
            <li className="pt-2" style={{ cursor: "pointer" }}>
              Skills
            </li>
            <li className="pt-2" style={{ cursor: "pointer" }}>
              Projects
            </li>
            <li className="pt-2" style={{ cursor: "pointer" }}>
              About Me
            </li>
            <li className="pt-2" style={{ cursor: "pointer" }}>
              Contact Me
            </li>
          </ul>
        </div>
        <div className="border-line  my-4 col-md-12"></div>
        <div className="arrange-desktop">
          <ul className="text-uppercase fw-bold menu-list">
            <li className="pt-2" style={{ cursor: "pointer" }}>
              Skills
            </li>
            <li className="pt-2" style={{ cursor: "pointer" }}>
              Projects
            </li>
            <li className="pt-2" style={{ cursor: "pointer" }}>
              About Me
            </li>
            <li className="pt-2" style={{ cursor: "pointer" }}>
              Contact Me
            </li>
          </ul>
        </div>
        <div className="arrange-mobile">
          <div
            className="d-flex flex-row align-items-center"
            style={{ cursor: "pointer" }}
          >
            <i className="fa-regular fa-envelope fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">mmbonojoan@gmail.com</div>
          </div>
          <div
            className="d-flex flex-row align-items-center py-3"
            style={{ cursor: "pointer" }}
          >
            <i class="fa-regular fa-message fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">+254 718 149 079</div>
          </div>
          <div
            className="d-flex flex-row align-items-center pb-3"
            style={{ cursor: "pointer" }}
          >
            <i class="fa-brands fa-linkedin fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">Linkedin</div>
          </div>
          <div
            className="d-flex flex-row align-items-center"
            style={{ cursor: "pointer" }}
          >
            <i class="fa-brands fa-square-github fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">Github</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
