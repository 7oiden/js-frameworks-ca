import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import { PRODUCTS_URL } from "../../constants/api";
import Heading from "../layout/Heading";
import ContentItem from "./ContentItem";
import Row from "react-bootstrap/Row";

export default function ContentList() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = PRODUCTS_URL;

  console.log(url);

  useEffect(function () {
    async function getContent() {
      try {
        const response = await axios.get(url);
        console.log("response", response.data);
        setContent(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getContent();
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
        {content.map((item) => {
          return (
            <ContentItem
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
