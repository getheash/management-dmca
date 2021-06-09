import Head from "next/head";
import styles from "../styles/pages.module.css";
import img from "../public/Rhonda.jpg";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

function Testimonials() {
  const viewport = useMediaQuery({ query: "(max-width: 670px)" });
  const isLayout = viewport ? "fixed" : "intrinsic";
  return (
    <div>
      <Head>
        <title>Geth Management - Testimonials</title>
      </Head>
      <div>
        <section className={styles.testimonials}>
          <div className={styles.testimonialBox}>
            <div className={styles.imageContainer}>
              <Image
                src={img}
                alt="Picture of Rhonda"
                width={250}
                height={290}
                layout={isLayout}
              />
              <p>
                <b>Rhonda</b>{" "}
                <a
                  href="https://twitter.com/OnlyOneRhonda"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    style={{ color: "dodgerblue" }}
                    className="fab fa-twitter"
                  ></i>
                </a>{" "}
                <a
                  href="https://www.instagram.com/onlyonerhonda/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    style={{ color: "dodgerblue" }}
                    className="fab fa-instagram"
                  ></i>
                </a>
              </p>
            </div>
            <div className={styles.clientDescription}>
              <p>
                <i>
                  We all know how important it is to keep major leaks off the
                  internet. It protects your brand by maintaining the incentive
                  to buy and prevents over-saturation. Geth saw me dealing with
                  constant takedowns of my content. There would be days where
                  I’d have to devote an extra 8 hours to finding and taking down
                  content - 8 additional hours on top of planning, prepping,
                  creating, editing, marketing, answering messages, school,
                  personal life, etc.
                </i>
              </p>
              <p>
                <i>
                  It was then that he offered his services to me to help take
                  some of the load off my back. I hired Geth’s company to find
                  leaks and submit DMCA takedowns and it’s a decision that I’m
                  happy I made. Hiring Geth has allowed me to stress less, kept
                  me away from having to read most ignorant comments, and it’s
                  allowed me to invest more time into my work. He’s very on top
                  of getting leaks submitted for DMCA Takedowns. He’s also been
                  100% professional and has never made me feel uncomfortable or
                  judged. I’d highly recommend Geth’s services to any model who
                  is in need of DMCA takedowns and really just wants to relieve
                  a bit of the work related stress.
                </i>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Testimonials;
