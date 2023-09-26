import { Navbar, Nav, Row, Col } from "react-bootstrap";
import { BsSearch, BsMinecart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import "./Header.scss";
import { NavLink } from "react-router-dom"; // Import NavLink for navigation links

const Header = () => {
  return (
    <header className="page-width">
      <Navbar style={{ width: "100%" }} bg="light" variant="light">
        <Row>
          <Col sm={3}>
            <Nav>
              <Navbar.Brand href="#home">MOURATO</Navbar.Brand>
            </Nav>
          </Col>
          <Col sm={6} className="text-center">
            <Nav className="me-auto">
              <NavLink to="/products" className="nav-link">
                Produse
              </NavLink>
              <NavLink to="/our-story" className="nav-link">
                Povestea noastra
              </NavLink>
              <NavLink to="/contacts" className="nav-link">
                Contact
              </NavLink>
            </Nav>
          </Col>
          {/* <Col sm={3} className="text-right">
            <Nav>
              <Nav.Link>
                <AiOutlineUser />
              </Nav.Link>
              <Nav.Link href="#pricing">
                <BsSearch />
              </Nav.Link>
              <Nav.Link href="#pricing">
                <BsMinecart />
              </Nav.Link>
            </Nav>
          </Col> */}
        </Row>
      </Navbar>
    </header>
  );
};

export default Header;
