import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LogoutLink() {
  const history = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  function handleLogout() {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    

    if (confirmLogout) {
      history("/");
      setAuth(null);
    }
  }

  return (
    <span onClick={handleLogout} className="nav-link">
      Logout
    </span>
  );
}
