import Layout from "../layout/Layout";
import Heading from "../layout/Heading";
import LoginForm from "../forms/LoginForm";

export default function Login() {
  return (
    <Layout login>
      <div className="form-wrapper">
        <Heading>Contact</Heading>
        <LoginForm />
      </div>
    </Layout>
  );
}
