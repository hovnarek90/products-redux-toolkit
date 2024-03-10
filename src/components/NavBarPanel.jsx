import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBarComponent() {
  const cartProducts = useSelector((state) => state.cart);
  // console.log(cartProducts);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/">Redux Toolkit</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/">
            Products
          </Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Nav.Link as={Link} to="/cart">
              My Bag : {cartProducts.length}
            </Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const NavBar = NavBarComponent;

export default NavBar;
