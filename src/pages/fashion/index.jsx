import Banner from "../../components/banner";
import PageTitle from "../../components/pageTitle";
import MiniSideBar from "../../containers/miniSideBar";
import LongPost from "../../components/longPost";
import CubBox from "../../components/cubPost";
import Pagination from "../../components/pagination";

const Fashoin = () => {
  return (
    <>
      <PageTitle title="Fashion" />
      <section class="section wb">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <MiniSideBar />
            </div>
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div class="page-wrapper">
                <div class="row">
                  <Banner />
                </div>
                <hr class="invis" />
                <div class="portfolio row">
                  <div class="pitem item-w1 item-h1">
                    <LongPost
                      style={{
                        width: "380px",
                      }}
                    />
                  </div>
                  <div class="pitem item-w1 item-h1">
                    <CubBox />
                  </div>
                  <div class="pitem item-w1 item-h1">
                    <LongPost
                      style={{
                        width: "380px",
                      }}
                    />
                  </div>
                  <div class="pitem item-w1 item-h1">
                    <LongPost
                      style={{
                        width: "380px",
                      }}
                    />
                  </div>
                  <hr class="invis" />
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <Pagination />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fashoin;
