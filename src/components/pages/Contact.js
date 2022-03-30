import ContactForm from "../forms/ContactForm";
import Heading from "../layout/Heading";
import Layout from "../layout/Layout";

export default function Contact() {
  return (
    <Layout contact>
      <div className="form-wrapper">
        <Heading>Contact</Heading>
        <ContactForm />
      </div>
    </Layout>
  );
}
