import NavBar from "./navbar";
import styles from "./layout.module.css";
import Container from "react-bootstrap/Container";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      {/* wrapping childern with react-bootstrap Container library */}
      <Container>
        <main className={styles.container}>{children}</main>
      </Container>
    </>
  );
}

export default Layout;
