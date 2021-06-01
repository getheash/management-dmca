import NavBar from "./navbar";
import styles from "./layout.module.css";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main className={styles.container}>{children}</main>
    </>
  );
}

export default Layout;
