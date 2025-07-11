import { Col, Row } from "react-bootstrap"
import Item from "./Item"

function Menu() {
  return (
    <section>
      <h2>Menyu</h2>
      <Row xs={1} md={2} xl={4} className="g-4">
        {Array.from({ length: 7 }).map((_, i) => (
          <Col key={i}>
            <Item />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Menu
