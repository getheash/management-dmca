import NavBar from "./navbar";
import styles from "./layout.module.css";
import Container from "react-bootstrap/Container";
import FooterCopyright from "./footerCopyright";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {/* wrapping childern with react-bootstrap Container library */}
      <Container className={styles.container}>
        <main>{children}</main>
      </Container>
      <FooterCopyright />
    </>
  );
}

export default Layout;
