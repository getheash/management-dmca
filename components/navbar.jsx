import React from "react";
import styles from "./navbar.module.css";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="primary"
        variant="dark"
        fixed="top"
      >
        <Navbar.Brand
          href="https://www.gethmanagement.com/"
          className={styles.navbarBrand}
        >
          GM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features" className="text-white">
              Features
            </Nav.Link>
            <Nav.Link href="#subscription" className="text-white">
              Subscription
            </Nav.Link>
            <Nav.Link href="#submit-links" className="text-white">
              Submit Links
            </Nav.Link>
            <Nav.Link href="#testimonials" className="text-white">
              Testimonials
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
