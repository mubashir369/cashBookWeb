import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Mubashir</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={(e) => navigate("/")}>Expense</Nav.Link>
            <Nav.Link onClick={(e) => navigate("/credit")}>Credit</Nav.Link>
            <Nav.Link onClick={(e) => navigate("/debit")}>Debit</Nav.Link>
            {/* <Nav.Link href="#contact">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Home;
