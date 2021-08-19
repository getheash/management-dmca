import React from "react";
import styles from "./navbar.module.css";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

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
          className={styles.logo}
        >
          <Image
            src="/logo.svg"
            alt="Geth Management Logo"
            width={30}
            height={30}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/*wrap Nav.Link within Link and use passHref attribute to avoid entire page refresh and proper routing*/}
            <Link href="/" passHref>
              <Nav.Link className={styles.navLink}>Features</Nav.Link>
            </Link>
            <Link href="/subscription" passHref>
              <Nav.Link className={styles.navLink}>Subscription</Nav.Link>
            </Link>
            <Link href="/submitlinks" passHref>
              <Nav.Link className={styles.navLink}>Submit Links</Nav.Link>
            </Link>
            <Link href="/testimonials" passHref>
              <Nav.Link className={styles.navLink}>Testimonials</Nav.Link>
            </Link>
            <Link href="/contact" passHref>
              <Nav.Link className={styles.navLink}>Contact</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
