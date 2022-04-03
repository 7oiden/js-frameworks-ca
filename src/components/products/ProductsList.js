import { useState, useEffect } from "react";
import { PRODUCTS_URL } from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Heading from "../layout/Heading";
import Row from "react-bootstrap/Row";
import ProductItem from "./ProductItem";


export default function ProductsList() {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = PRODUCTS_URL;

  useEffect(function () {
    async function getproduct() {
      try {
        const response = await axios.get(url);
        // console.log("response", response.data);
        setproduct(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getproduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;

  if (error) {
    return (
      <AlertMessage
        variant="danger"
        message="An error occured when trying to fetch the API"
      />
    );
  }

  return (
    <>
      <Heading size="2">Products:</Heading>
      <Row className="gy-5">
        {product.map((item) => {
          return (
            <ProductItem
              key={item.id}
              title={item.title}
              image={item.image}
              category={item.category}
              price={item.price}
              param={item.id}
            />
          );
        })}
      </Row>
    </>
  );
}
