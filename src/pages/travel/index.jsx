import Banner from "../../components/banner";
import PageTitle from "../../components/pageTitle";
import MiniSideBar from "../../containers/miniSideBar";
import Pagination from "../../components/pagination";
import BigPosts from "../../containers/bigPosts";
import SecondMainPost from "../../components/secondMainPosts";

const Travel = () => {
  return (
    <>
      <PageTitle title="Travel" />
      <section class="section wb">
        <div class="container">
          <div class="row">
            <div class="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              <div class="page-wrapper">
                <Banner />
                <div class="blog-grid-system">
                  <div class="row">
                    <div class="col-md-12">
                      <SecondMainPost
                        list={[1, 2, 3, 4, 5, 6]}
                        title="Lifestyle"
                      />
                      <Pagination />
                    </div>
                  </div>
                </div>
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

export default Travel;
