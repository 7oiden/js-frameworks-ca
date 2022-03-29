import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import Heading from "../layout/Heading";
import Layout from "../layout/Layout";

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
