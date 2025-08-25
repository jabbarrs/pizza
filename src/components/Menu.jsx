import { useOutletContext } from "react-router"
import { Col, Row } from "react-bootstrap"
import Item from "./Item"
import Filter from "./Filter"

function Menu() {
  const { data: {size, pizza}, add2Basket } = useOutletContext()

  return (
    <section>
      <h2>Menyu</h2>
      <Filter />
      <Row xs={1} md={2} xl={4} className="g-4">
        {pizza.map((item, i) => (
          <Col key={i}>
            <Item {...item} size={size} add2Basket={add2Basket} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Menu
