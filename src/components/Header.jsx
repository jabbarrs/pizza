import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router";
import { BsCart4 } from "react-icons/bs";

function Header({basket, setShow}) {
  return (
    <header>
      <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Link href="/" className="navbar-brand">
            <img id="logo" src="./assets/img/logo.png" alt="Pizza logo" />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Ana Səhifə
              </NavLink>
              <NavLink className="nav-link" to="/menu">
                Menyu
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Əlaqə
              </NavLink>
            </Nav>
            <Nav>
              <div onClick={() => setShow(true)} className="position-relative">
                <BsCart4 size={"30"} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{basket.length}</span>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
