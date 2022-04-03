import Layout from "../layout/Layout";
import Heading from "../layout/Heading";
import LoginForm from "../forms/LoginForm";

export default function Login() {
  return (
    <Layout>
      <div className="form-wrapper">
        <Heading>Admin login</Heading>
        <LoginForm />
      </div>
    </Layout>
  );
}
