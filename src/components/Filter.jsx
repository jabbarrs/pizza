import { Form } from "react-bootstrap";

const check = ["chick", "meat", "vegan", "spicy"];

const Filter = () => {
  return (
    <Form>
      
      {check.map((c, i) => (
        <Form.Check key={i} inline label={c} name="g1" type="radio" />
      ))}

      <Form.Control type="text" placeholder="axtar..." className="my-3" />
    </Form>
  );
};

export default Filter;
