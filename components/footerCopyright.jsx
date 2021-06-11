import styles from "./footer.module.css";

function FooterCopyright() {
  return (
    <footer>
      <div style={{ height: "65px" }}>
        <div className={styles.footerCopyright}>
          &copy; Copyright 2020 - 2021{" "}
          <a href="https://www.gethmanagement.com/" className="text-white">
            Geth Management
          </a>{" "}
          - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default FooterCopyright;
