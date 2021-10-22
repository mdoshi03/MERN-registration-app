import React from "react";
import logo from "../../assets/miracle-logo.svg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-light ms-auto"
        style={{ backgroundColor: "#b3dcfa" }}
      >
        <a className="navbar-brand" href="/" style={{ paddingLeft: "20px" }}>
          <img src={logo} width="100" height="40" alt="" />
        </a>
        <div>
          <Link to="/register" style={{ paddingRight: "20px" }}>
            <Button variant="outline-primary">Register</Button>
          </Link>
          <Link to="/" style={{ paddingRight: "20px" }}>
            <Button variant="outline-primary">User Table</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
