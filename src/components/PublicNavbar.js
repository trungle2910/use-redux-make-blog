import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import githubIco from "../images/github_icon.png";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
const PublicNavbar = () => {
  const name = useSelector((state) => state.auth.user.name);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <img src={logo} alt="CoderSchool" width="100px" onClick={goHome} />
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Nav>
        {isAuthenticated ? (
          <span style={{ padding: "8px" }}>{name}</span>
        ) : (
          <Nav.Link href="/login">Login</Nav.Link>
        )}
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default PublicNavbar;
