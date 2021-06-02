import Head from "next/head";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Website to handle DMCA takedowns" />
        {/*add script to add fontawesome icon library */}
        <script
          src="https://kit.fontawesome.com/900c52cd77.js"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
