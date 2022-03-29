import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function LogoutLink() {
  const [auth, setAuth] = useContext(AuthContext);

  function handleLogout() {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      setAuth(null);
    }
  }

  return (
    <span onClick={handleLogout}>Logout</span>
  )
}
