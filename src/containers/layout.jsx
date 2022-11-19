import Header from "./header";
import Footer from "./footer";
import TopBar from "./extraHeader";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <div id="wrapper">
        {/* <TopBar /> */}

        <div style={{ width: "100%" }}>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
