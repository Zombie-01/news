import blog_12 from "../upload/blog_12.jpg";
import Img from "./img";
const SideMiniPost = () => {
  return (
    <>
      <div className="blog-box">
        <div className="post-media">
          <a href="single.html" title="">
            <Img src={blog_12.src} alt="" className="img-fluid" />
            <div className="hovereffect">
              <span className="videohover"></span>
            </div>
          </a>
        </div>
        <div className="blog-meta">
          <h4>
            <a href="single.html" title="">
              How to become a good vlogger
            </a>
          </h4>
          <small>
            <a href="blog-category-01.html" title="">
              Beauty
            </a>
          </small>
          <small>
            <a href="blog-category-01.html" title="">
              20 July, 2017
            </a>
          </small>
        </div>
      </div>

      <hr className="invis" />
    </>
  );
};

export default SideMiniPost;
