import ContactForm from "../form/ContactForm";
import Heading from "../layout/Heading";
import Layout from "../layout/Layout";

export default function Contact() {
  return (
    <Layout contact>
      <Heading>Contact</Heading>
      <ContactForm />
    </Layout>
  );
}
