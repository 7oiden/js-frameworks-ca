import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PRODUCTS_URL } from "../../constants/api";
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

  const detailsUrl = PRODUCTS_URL + "/" + param;

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
      <div className="details-wrapper">
        <img
          src={content.image}
          alt={content.title}
          className="details-image"
        />
        <Heading>{content.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: content.description }} />
        <p>{content.price}$</p>
        <Link to="/" className="back-link">
          ← Back to homepage
        </Link>
      </div>
    </Layout>
  );
}
