import { Link } from "react-router-dom";

export default function LoginLink(props) {
  return (
    <Link to="/login" className={props.login ? "nav-link active" : "nav-link"}>
      Login
    </Link>
  );
}
