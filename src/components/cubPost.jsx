import authhor from "../upload/author_02.jpg";

const CubBox = () => {
  return (
    <>
      <div class="blog-box">
        <div class="post-media">
          <a href="single.html" title="">
            <img src={authhor.src} alt="" class="img-fluid" />
            <div class="hovereffect">
              <span></span>
            </div>
          </a>
        </div>
        <div class="blog-meta">
          <span class="bg-pink">
            <a href="blog-category-01.html" title="">
              Fashion
            </a>
          </span>
          <h4>
            <a href="single.html" title="">
              This year green glasses trend
            </a>
          </h4>
          <small>
            <a href="blog-author.html" title="">
              By: Jenny
            </a>
          </small>
          <small>
            <a href="blog-category-01.html" title="">
              19 July, 2017
            </a>
          </small>
        </div>
      </div>
    </>
  );
};

export default CubBox;
