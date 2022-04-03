import Layout from "../layout/Layout";
import Heading from "../layout/Heading";
import ProductsList from "../products/ProductsList";

export default function Home() {
  return (
    <Layout>
      <Heading>Amazing Products</Heading>
      <p className="home-paragraph">
        Welcome to the homepage for <strong>amazing products!</strong>
      </p>
      <ProductsList />
    </Layout>
  );
}
