import SidePosts from "./sidePosts";
import Banner from "../components/banner";
import ThirdMainPost from "../components/thirdMainPosts";
import SecondMainPost from "../components/secondMainPosts";
import LongPosts from "./longPosts";

const PopularNews = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <SecondMainPost list={[1, 2]} title="Lifestyle" />
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <LongPosts title="fashion" list={[1, 2]} />
          </div>
        </div>

        <hr className="invis1" />

        <div className="row">
          <Banner />
        </div>

        <hr className="invis1" />

        <div className="row">
          <div className="col-lg-9">
            <div className="blog-list clearfix">
              <ThirdMainPost title="Travel" list={[1, 2, 3]} />
            </div>
            <hr className="invis" />
            <div className="blog-list clearfix">
              <ThirdMainPost title="Food" list={[1, 2, 3]} />
            </div>
          </div>

          <div className="col-lg-3">
            <SidePosts title="Vlog" />
            <SidePosts title="Health" />
          </div>
        </div>

        <hr className="invis1" />

        <div className="row">
          <Banner />
        </div>
      </div>
    </section>
  );
};

export default PopularNews;
