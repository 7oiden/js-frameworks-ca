import ProductsList from "../products/ProductsList";
import Heading from "../layout/Heading";
import Layout from "../layout/Layout";

export default function Home() {
  return (
    <Layout home>
      <Heading>Amazing Products</Heading>
      <p className="home-paragraph">
        Welcome to the homepage for <strong>amazing products!</strong>
      </p>
      <ProductsList />
    </Layout>
  );
}
