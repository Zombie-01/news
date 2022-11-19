import blog_01 from "../upload/blog_01.jpg";
import LongPost from "../components/longPost";
const LongPosts = ({ title, list }) => {
  return (
    <>
      <div className="section-title">
        <h3 className="color-pink">
          <a href="blog-category-01.html" title="">
            Fashion
          </a>
        </h3>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          {list.map((e, i) => (
            <div key={i}>
              <LongPost />
            </div>
          ))}
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
          {list.map((e, i) => (
            <div key={i}>
              <LongPost />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LongPosts;
