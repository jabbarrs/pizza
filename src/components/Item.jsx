import { useState } from "react";
import { Button, Card, Form, InputGroup } from "react-bootstrap";

function Item({ id, name, img, desc, price, size, add2Basket }) {
  const path = "./assets/img/";
  const [olcu, setOlcu] = useState(Object.keys(price)[0]);
  const [count, setCount] = useState(1);
  return (
    <Card className="mb-4 shadow-sm">
      <Card.Img variant="top" src={path + img} alt={name} />
      <Card.Body className="px-3 py-3">
        <Card.Title className="mb-3">{name}</Card.Title>
        <Card.Text className="mb-2 text-muted">{desc}</Card.Text>

        <Form.Select
          onChange={(e) => setOlcu(e.target.value)}
          aria-label="Default select example"
        >
          {Object.keys(price).map((p) => (
            <option key={p} value={p}>
              {size[p]}
            </option>
          ))}
        </Form.Select>

        <div className="d-flex justify-content-between align-items-center my-3">
          <InputGroup className="w-auto">
            <Button
              onClick={() => setCount(count > 1 ? count - 1 : 1)}
              variant="outline-secondary"
              size="sm"
            >
              -
            </Button>
            <h5 className="pt-1 px-2 mb-0">{count}</h5>
            <Button
              onClick={() => setCount(count + 1)}
              variant="outline-secondary"
              size="sm"
            >
              +
            </Button>
          </InputGroup>

          <h4 className="mb-0">{price[olcu]} ₼</h4>
        </div>

        <div className="d-grid ">
          <Button onClick={() => add2Basket(id, olcu, count)} variant="warning">
            Ye meni!
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Item;
