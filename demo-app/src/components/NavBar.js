import React from "react";
import logo from "../assets/miracle-logo.svg";
const NavBar = () => {
  return (
    <div>
      <nav
        class="navbar navbar-light ms-auto"
        style={{ "background-color": "#e3f2fd", paddingLeft: "20px" }}
      >
        <a class="navbar-brand" href="#">
          <img src={logo} width="100" height="40" alt="" />
        </a>
      </nav>
    </div>
  );
};

export default NavBar;
