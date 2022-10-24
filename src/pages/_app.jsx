import Layout from "../containers/layout";
import "../css/global.css";
import "../css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import "../css/font-awesome.min.css";
import Script from "next/script";
import "../css/responsive.css";
import "../css/colors.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <></>
      <link
        href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,400i,500,700"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900"
        rel="stylesheet"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Script src="../js/jquery.min.js"></Script>
      <Script src="../js/tether.min.js"></Script>
      <Script src="../js/bootstrap.min.js"></Script>
      <Script src="../js/custom.js"></Script>
    </>
  );
}

export default MyApp;
