import Layout from "../containers/layout";
import "../css/global.css";
import "../css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { AuthContextProvider } from "../context/AuthContext";
import { DarkModeContextProvider } from "../context/darkModeContext";
// import "../css/font-awesome.min.css";
import Script from "next/script";
import "../css/responsive.css";
import "../css/colors.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DarkModeContextProvider>
        <AuthContextProvider>
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
        </AuthContextProvider>
      </DarkModeContextProvider>
    </>
  );
}

export default MyApp;
