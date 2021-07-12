import Head from "next/head";
import styles from "../styles/pages.module.css";

function Contact() {
  return (
    <div>
      <Head>
        <title>Geth Management - Contact</title>
      </Head>
      <div>
        <section className={styles.contact}>
          <h3>Contact us</h3>
          <p>
            If you need more information or have queries regarding how we could
            protect your content, please contact us at{" "}
            <i style={{ color: "dodgerblue" }} className="fas fa-envelope"></i>{" "}
            :{" "}
            <a
              href="mailto: contact@gethmanagement.com"
              target="_blank"
              rel="noreferrer"
              className="text-dark"
            >
              <u>contact@gethmanagement.com</u>
            </a>
          </p>
          <p>
            If you are a subscriber, please mention your identity code in the
            subject line for quick assistance. We look forward to hear from you.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Contact;
