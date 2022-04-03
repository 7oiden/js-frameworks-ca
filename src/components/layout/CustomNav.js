import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import LogoutLink from "../login/LogoutLink";
import LoginLink from "../login/LoginLink";

export default function CustomNav() {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="brand-link">
            Course Assignment
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </NavLink>
            {auth ? <LogoutLink /> : <LoginLink />}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
