import Banner from "../../components/banner";
import PageTitle from "../../components/pageTitle";
import MiniSideBar from "../../containers/miniSideBar";
import Pagination from "../../components/pagination";
import ThirdMainPost from "../../components/thirdMainPosts";

const Food = () => {
  return (
    <>
      <PageTitle title="Food & Drink" />
      <section class="section wb">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div class="page-wrapper">
                <div className="col-lg-12">
                  <div className="blog-list clearfix">
                    <ThirdMainPost title="Food" list={[1, 2, 3]} />
                  </div>
                  <hr className="invis" />
                  <div className="blog-list clearfix">
                    <Banner />
                  </div>
                  <hr className="invis" />
                  <div className="blog-list clearfix">
                    <ThirdMainPost title="Food" list={[1, 2, 3, 4]} />
                  </div>
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

export default Food;
