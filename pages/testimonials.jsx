import Head from "next/head";
import styles from "../styles/pages.module.css";
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
                src="/Rhonda.jpg"
                alt="Picture of Rhonda"
                width={250}
                height={290}
                quality="100%"
                layout={isLayout}
                priority="true"
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
          <div className={styles.testimonialBox}>
            <div className={styles.imageContainer}>
              <Image
                src="/Persephanii.jpg"
                alt="Picture of Persephanii"
                width={250}
                height={290}
                quality="100%"
                layout={isLayout}
                priority="true"
              />
              <p>
                <b>Persephanii</b>{" "}
                <a
                  href="https://twitter.com/Persephaniii"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    style={{ color: "dodgerblue" }}
                    className="fab fa-twitter"
                  ></i>
                </a>{" "}
                <a
                  href="https://www.instagram.com/persephanii/"
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
                  Working with Geth is the best business decision I have ever
                  made. When I started working with him I was very stressed out
                  about how my content was being spread around the internet, it
                  got to a point where I became discouraged and wanted to stop
                  creating. Once I started working with him I immediately felt
                  relief, he was very open with communication and on top of
                  everything. When we started I sent him over a few things to
                  flag that I'd been able to spot out and he responded that had
                  already taken care of it. By hiring him I was able to get back
                  in to my creative flow, I recommend him to everyone he is very
                  easy going and professional. He is more than competent in his
                  profession.
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
