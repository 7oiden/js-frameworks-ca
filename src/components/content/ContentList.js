import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import { CONTENT_URL } from "../../constants/api";
import Heading from "../layout/Heading";
import ContentItem from "./ContentItem";
import Row from "react-bootstrap/Row";

export default function ContentList() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = CONTENT_URL;

  console.log(url);

  useEffect(function () {
    async function getContent() {
      try {
        const response = await axios.get(url);
        console.log("response", response.data.results);
        setContent(response.data.results);
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
      <Heading size="2">List of games</Heading>
      <Row className="gy-5">
        {content.map((item) => {
          return (
            <ContentItem
              key={item.id}
              name={item.name}
              image={item.background_image}
              rating={item.rating}
              param={item.slug}
            />
          );
        })}
      </Row>
    </>
  );
}
