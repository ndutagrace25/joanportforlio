import React from "react";

const Navbar = () => {
  return (
    <div className="px-5 pt-4 d-flex justify-content-end nav-icon">
      <div className="primary-color p-2 rounded" style={{ cursor: "pointer" }}>
        <i className="fas fa-bars fa-2xl text-white icon-size"></i>
      </div>
    </div>
  );
};

export default Navbar;
