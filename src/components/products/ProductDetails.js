import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PRODUCTS_URL } from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Heading from "../layout/Heading";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const [product, setproduct] = useState([]);
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
          // console.log("response:", response.data);
          setproduct(response.data);
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
    <div className="details-wrapper">
      <img src={product.image} alt={product.title} className="details-image" />
      <Heading>{product.title}</Heading>
      <div
        className="detail-text"
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
      <p className="price">{product.price}$</p>
      <Button disabled={true}>Buy</Button>
      <Link to="/" className="back-link">
        ← Back to homepage
      </Link>
    </div>
  );
}
