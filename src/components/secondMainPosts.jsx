import blog_05 from "../upload/blog_05.jpg";

const SecondMainPost = ({ title, list }) => {
  return (
    <>
      <div className="section-title">
        <h3 className={title === "Lifestyle" ? "color-aqua" : ""}>
          <a href="blog-category-01.html" title="">
            {title}
          </a>
        </h3>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          {list.map((e, i) => (
            <>
              <div className="blog-box">
                <div className="post-media">
                  <a href="single.html" title="">
                    <img src={blog_05.src} alt="" className="img-fluid" />
                    <div className="hovereffect">
                      <span></span>
                    </div>
                  </a>
                </div>
                <div className="blog-meta big-meta">
                  <h4>
                    <a href="single.html" title="">
                      The golden rules you need to know for a positive life
                    </a>
                  </h4>
                  <p>
                    Aenean interdum arcu blandit, vehicula magna non, placerat
                    elit. Mauris et pharetratortor. Suspendissea sodales urna.
                    In at augue elit. Vivamus enim nibh, maximus ac felis nec,
                    maximus tempor odio.
                  </p>
                  <small>
                    <a href="blog-category-01.html" title="">
                      Lifestyle
                    </a>
                  </small>
                  <small>
                    <a href="single.html" title="">
                      24 July, 2017
                    </a>
                  </small>
                  <small>
                    <a href="blog-author.html" title="">
                      by Amanda
                    </a>
                  </small>
                </div>
              </div>
              <hr className="invis" />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondMainPost;
