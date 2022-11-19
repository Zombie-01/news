import Banner from "../../components/banner";
import PageTitle from "../../components/pageTitle";
import MiniSideBar from "../../containers/miniSideBar";
import LongPost from "../../components/longPost";
import CubBox from "../../components/cubPost";
import Pagination from "../../components/pagination";
import Header from "../../containers/header";
import Footer from "../../containers/footer";
import { useRouter } from "next/router";

const Fashoin = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <PageTitle />
      <section className="section wb">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <MiniSideBar />
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div className="page-wrapper">
                <div className="row">
                  <Banner />
                </div>
                <hr className="invis" />
                <div className="portfolio row">
                  <div className="pitem item-w1 item-h1">
                    <LongPost
                      style={{
                        width: "380px",
                      }}
                    />
                  </div>
                  <div className="pitem item-w1 item-h1">
                    <CubBox />
                  </div>
                  <div className="pitem item-w1 item-h1">
                    <LongPost
                      style={{
                        width: "380px",
                      }}
                    />
                  </div>
                  <div className="pitem item-w1 item-h1">
                    <LongPost
                      style={{
                        width: "380px",
                      }}
                    />
                  </div>
                  <hr className="invis" />
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Fashoin;
