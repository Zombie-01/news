import Header from "./header";
import Footer from "./footer";
import TopBar from "./extraHeader";
import styled from "styled-components";
import Script from "next/script";

const Layout = ({ children }) => {
  return (
    <>
      <div id="wrapper">
        <TopBar />
        <LayoutDiv>
          <Header />
          {children}
          <Footer />
        </LayoutDiv>
      </div>
    </>
  );
};

export default Layout;

const LayoutDiv = styled("div")`
  margin: auto;
  width: 100%;
`;
