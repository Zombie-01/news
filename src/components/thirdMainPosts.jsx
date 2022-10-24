import blog_square_01 from "../upload/blog_square_01.jpg";
import Img from "./img";
const ThirdMainPost = ({ title, list }) => {
  return (
    <>
      <div className="section-title">
        <h3
          className={
            title === "Travel"
              ? `color-green`
              : title === "Food"
              ? `color-red`
              : ""
          }
        >
          <a href="blog-category-01.html" title="">
            {title}
          </a>
        </h3>
      </div>
      {list.map((e, i) => (
        <>
          <div key={i} className="blog-box row">
            <div className="col-md-4">
              <div className="post-media">
                <a href="single.html" title="">
                  <Img src={blog_square_01.src} alt="" className="img-fluid" />
                  <div className="hovereffect"></div>
                </a>
              </div>
            </div>

            <div className="blog-meta big-meta col-md-8">
              <h4>
                <a href="single.html" title="">
                  5 Beautiful buildings you need to visit without dying
                </a>
              </h4>
              <p>
                Aenean interdum arcu blandit, vehicula magna non, placerat elit.
                Mauris et pharetratortor. Suspendissea sodales urna. In at augue
                elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor
                odio.
              </p>
              <small>
                <a href="blog-category-01.html" title="">
                  Travel
                </a>
              </small>
              <small>
                <a href="single.html" title="">
                  21 July, 2017
                </a>
              </small>
              <small>
                <a href="blog-author.html" title="">
                  by Boby
                </a>
              </small>
            </div>
          </div>
          <hr className="invis" />
        </>
      ))}
    </>
  );
};

export default ThirdMainPost;
