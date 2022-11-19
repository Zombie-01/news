import Banner from "../../../../components/banner";
import PageTitle from "../../../../components/pageTitle";
import MiniSideBar from "../../../../containers/miniSideBar";
import Pagination from "../../../../components/pagination";
import BigPosts from "../../../../containers/bigPosts";
import SecondMainPost from "../../../../components/secondMainPosts";
import Header from "../../../../containers/header";
import Footer from "../../../../containers/footer";

const Travel = () => {
  return (
    <>
      <Header />
      <PageTitle title="Travel" />
      <section className="section wb">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div className="page-wrapper">
                <Banner />
                <div className="blog-grid-system">
                  <div className="row">
                    <div className="col-md-12">
                      <Pagination />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <MiniSideBar />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Travel;
