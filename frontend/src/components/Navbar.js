import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav';
import "./navbar.css";
import Context from "../Context/Context";
function Navy() {
  const {user} = useContext(Context)
  return (
    <div id="parent">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">
          <div id="logo-name">
            <img
              src="https://www.pngall.com/wp-content/uploads/5/Video-Game-Controller-PNG-Picture.png"
              width="40"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              />
           <p>{user?.username}</p>
              </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <p>Username</p>
            <Nav>
              <Nav.Link href="/games">Games</Nav.Link>
              <Nav.Link href="#pricing">Friends</Nav.Link>
              <Nav.Link href="#deets">Favorites</Nav.Link>
              <Nav.Link  href="#memes"> Log Out </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navy;
