import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import LoginLink from "../login/LoginLink";
import LogoutLink from "../login/LogoutLink";

export default function CustomNav(props) {
  const { home, contact, login } = props;
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
            <Link to="/" className={home ? "nav-link active" : "nav-link"}>
              Home
            </Link>
            <Link
              to="/contact"
              className={contact ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
            {auth ? (
              <LogoutLink />
            ) : (
              <LoginLink login={login} />
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
