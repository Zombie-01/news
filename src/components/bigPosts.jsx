import image from "../upload/blog_custom_01.jpg";
import Img from "./img";
const BigPost = () => {
  return (
    <>
      <div class="blog-box">
        <div class="post-media">
          <a href="single.html" title="">
            <Img src={image.src} alt="" class="img-fluid" />
            <div class="hovereffect">
              <span></span>
            </div>
          </a>
        </div>
        <div class="blog-meta big-meta text-center">
          <div class="post-sharing">
            <ul class="list-inline">
              <li>
                <a href="#" class="fb-button btn btn-primary">
                  <i class="fa fa-facebook"></i>{" "}
                  <span class="down-mobile">Share on Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" class="tw-button btn btn-primary">
                  <i class="fa fa-twitter"></i>{" "}
                  <span class="down-mobile">Tweet on Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" class="gp-button btn btn-primary">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
            </ul>
          </div>
          <h4>
            <a href="single.html" title="">
              The golden rules you need to know for a positive life
            </a>
          </h4>
          <p>
            Aenean interdum arcu blandit, vehicula magna non, placerat elit.
            Mauris et pharetratortor. Suspendissea sodales urna. In at augue
            elit. Vivamus enimcerat elicerat eli nibh, maximus ac felis nec,
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
          <small>
            <a href="blog-author.html" title="">
              <i class="fa fa-eye"></i> 2291
            </a>
          </small>
        </div>
      </div>

      <hr class="invis"></hr>
    </>
  );
};

export default BigPost;
