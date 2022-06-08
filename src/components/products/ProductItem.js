import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function ProductItem(props) {
  const { title, image, category, price, param } = props;

  return (
    <Col>
    <Link to={`detail/${param}`} className="card-link">
      <Card style={{ width: "18rem" }}>
        <figure>
          <Card.Img variant="top" src={image} />
        </figure>
        <Card.Body>
            <Card.Title as="h3">{title}</Card.Title>
            <Card.Text className="category">{category}</Card.Text>
            <Card.Text className="price card-price">{price}$</Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </Col>
  );
}


