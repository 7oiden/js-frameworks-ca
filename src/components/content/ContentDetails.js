import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CONTENT_URL } from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Heading from "../layout/Heading";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";

export default function ContentDetails() {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useNavigate();

  const { param } = useParams();

  if (!param) {
    history("/");
  }

  const detailsUrl =
    "https://api.rawg.io/api/games/" +
    param +
    "?key=54582cd735a340b89b17702eae51578b";

  useEffect(
    function () {
      async function getDetails() {
        try {
          const response = await axios.get(detailsUrl);
          console.log("response:", response.data);
          setContent(response.data);
        } catch (error) {
          console.log(error);
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      getDetails();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (loading) return <Loader />;

  if (error)
    return (
      <AlertMessage
        variant="danger"
        message="An error occured when trying to fetch the page"
      />
    );

  return (
    <Layout>
      <Heading>{content.name}</Heading>
      <div dangerouslySetInnerHTML={{ __html: content.description }} />
      <Link to="/">← Back to homepage</Link>
    </Layout>
  );
}
