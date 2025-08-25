import { Button, Modal, Table } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";

const Basket = ({ show, onHide, basket, pizza, deleteFromBasket, updateBasket }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Səbət</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Sifariş olunanlar</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Şəkil</th>
              <th>Ad</th>
              <th>Ölçü</th>
              <th>Qiymət</th>
              <th>Say</th>
              <th>Məbləğ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {basket.map((order, i) => {
              let p = pizza.find((item) => item.id == order.id);
              const path = "./assets/img/";
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <img src={path + p.img} alt={p.name} className="thumb" />
                  </td>
                  <td>{p.name}</td>
                  <td>{order.size}</td>
                  <td>{p.price[order.size]}</td>
                  <td>
                    <Button onClick={() => updateBasket(i, order.quant - 1)} variant="outline-secondary">-</Button>
                    <span className="px-2">{order.quant}</span>
                    <Button onClick={() => updateBasket(i, order.quant + 1)} variant="outline-secondary">+</Button>
                  </td>
                  <td>{order.quant * p.price[order.size]}</td>
                  <td>
                    <FaRegTrashAlt onClick={() => deleteFromBasket(i)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Basket;
