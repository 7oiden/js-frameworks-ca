import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LogoutLink from "../logout/LogoutLink";

export default function CustomNav(props) {
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
            <Link
              to="/"
              className={props.home ? "nav-link active" : "nav-link"}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={props.contact ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
            {/* <Link to="/admin" className="nav-link">
              Admin
            </Link> */}
            <Link
              to="/login"
              className={props.login ? "nav-link active" : "nav-link"}
            >
              {auth ? <LogoutLink /> : "Login"}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
