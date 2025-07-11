import { useOutletContext } from "react-router"
import { Col, Row } from "react-bootstrap"
import Item from "./Item"

function Menu() {
  const { size, pizza } = useOutletContext()

  return (
    <section>
      <h2>Menyu</h2>
      <Row xs={1} md={2} xl={4} className="g-4">
        {pizza.map((item, i) => (
          <Col key={i}>
            <Item {...item} size={size} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Menu
