import Banner from "../../components/banner";
import PageTitle from "../../components/pageTitle";
import MiniSideBar from "../../containers/miniSideBar";
import Pagination from "../../components/pagination";
import BigPosts from "../../containers/bigPosts";

const lifeStyle = () => {
  return (
    <>
      <PageTitle title="Lifestyle" />
      <section class="section wb">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div class="page-wrapper">
                <div className="col-lg-12">
                  <div className="blog-list clearfix">
                    <BigPosts list={[1, 2, 3]} />
                  </div>
                  <hr className="invis" />
                </div>
                <Pagination />
              </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12">
              <MiniSideBar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default lifeStyle;
