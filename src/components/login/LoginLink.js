import { NavLink } from "react-router-dom";

export default function LoginLink(props) {
  return (
    <NavLink
      to="/login"
      className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
    >
      Login
    </NavLink>
  );
}
