import ContentList from "../content/ContentList";
import Heading from "../layout/Heading";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <Layout home>
      <Heading>Home</Heading>
      <ContentList />
    </Layout>
  );
}
