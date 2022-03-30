import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ContentItem(props) {
  const { title, image, price, param } = props;
  return (
    <Col>
      <Link to={`detail/${param}`} className="card-link">
        <Card style={{ width: "18rem" }}>
          <figure>
            <Card.Img variant="top" src={image} />
          </figure>
          <Card.Body>
            <Card.Title as="h3">{title}</Card.Title>
            <Card.Text>{price}$</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
