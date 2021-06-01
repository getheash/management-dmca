import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Geth Management</title>
      </Head>
      <div>
        <h1 className={styles.title}>Welcome to Geth Management</h1>
      </div>
    </div>
  );
}

export default Home;
