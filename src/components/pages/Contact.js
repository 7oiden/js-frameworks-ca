import Layout from "../layout/Layout";
import Heading from "../layout/Heading";
import ContactForm from "../forms/ContactForm";

export default function Contact() {
  return (
    <Layout>
      <div className="form-wrapper">
        <Heading>Contact</Heading>
        <ContactForm />
      </div>
    </Layout>
  );
}
