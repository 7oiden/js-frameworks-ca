import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function ContentItem(props) {
  const { name, rating, image, param } = props;
  return (
    <Col>
      <Link to={`detail/${param}`}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{rating}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}
