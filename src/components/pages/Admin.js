import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
import Heading from "../layout/Heading";

export default function Admin() {
  const [auth, setAuth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }
  return (
    <Layout>
      <Heading>Admin</Heading>
    </Layout>
  );
}
