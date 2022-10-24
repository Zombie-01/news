import blog_01 from "../upload/blog_01.jpg";
const LongPost = ({ style }) => {
  return (
    <>
      <div className="blog-box" style={style}>
        <div className="post-media">
          <a href="single.html" title="">
            <img src={blog_01.src} alt="" className="img-fluid" />
            <div className="hovereffect">
              <span></span>
            </div>
          </a>
        </div>
        <div className="blog-meta">
          <h4>
            <a href="single.html" title="">
              What is your favorite leather jacket color
            </a>
          </h4>
          <small>
            <a href="blog-category-01.html" title="">
              Fashion
            </a>
          </small>
          <small>
            <a href="blog-category-01.html" title="">
              21 July, 2017
            </a>
          </small>
        </div>
      </div>

      <hr className="invis" />
    </>
  );
};

export default LongPost;
