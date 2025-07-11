import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router"

function Header() {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <NavLink href="/" className="navbar-brand">
                        <img id="logo" src="./assets/img/logo.png" alt="Pizza logo" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link" to='/'>Ana Səhifə</NavLink>
                            <NavLink className="nav-link" to='/menu'>Menyu</NavLink>
                            <NavLink className="nav-link" to='/contact'>Əlaqə</NavLink>                            
                        </Nav>
                        <Nav>
                            <Nav.Link>Səbət</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
