import blog_05 from "../upload/blog_05.jpg";

import Link from "next/link";
import { useRouter } from "next/router";
const SecondMainPost = ({ title, list }) => {
  const router = useRouter();
  return (
    <>
      <div className="section-title">
        <h3
          className={` ${
            router.query?.first === "Энтертайнмент"
              ? "color-blue"
              : router.query?.first === "Зөвлөгөө"
              ? "color-pink"
              : router.query?.first === "Технологи"
              ? "color-red"
              : router.query?.first === "Хэвмаяг"
              ? "color-aqua"
              : router.query?.first === "Дизайн"
              ? "color-green"
              : router.query?.first === "Спорт"
              ? "color-grey"
              : router.query?.first === "Дэлхий"
              ? "color-grey"
              : ""
          }`}
        >
          <a href="blog-category-01.html" title="">
            {router.query?.second}
          </a>
        </h3>
      </div>

      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          {list.map((e, i) => (
            <div key={i}>
              <div className="blog-box">
                <div className="post-media">
                  <Link
                    href={`/${router.query?.first}/${router.query?.second}/${i}`}
                  >
                    <a title="">
                      <img src={blog_05.src} alt="" className="img-fluid" />
                      <div className="hovereffect">
                        <span></span>
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="blog-meta big-meta">
                  <h4>
                    <Link
                      href={`/${router.query?.first}/${router.query?.second}/${i}`}
                    >
                      <a title="">
                        The golden rules you need to know for a positive life
                      </a>
                    </Link>
                  </h4>
                  <p>
                    Aenean interdum arcu blandit, vehicula magna non, placerat
                    elit. Mauris et pharetratortor. Suspendissea sodales urna.
                    In at augue elit. Vivamus enim nibh, maximus ac felis nec,
                    maximus tempor odio.
                  </p>
                  <small>
                    <Link
                      href={`/${router.query?.first}/${router.query?.second}/${i}`}
                    >
                      <a title="">{router.query?.first}</a>
                    </Link>
                  </small>
                  <small>
                    <Link
                      href={`/${router.query?.first}/${router.query?.second}/${i}`}
                    >
                      <a title="">24 July, 2017</a>
                    </Link>
                  </small>
                  <small>
                    <Link
                      href={`/${router.query?.first}/${router.query?.second}/${i}`}
                    >
                      <a title="">by Amanda</a>
                    </Link>
                  </small>
                </div>
              </div>
              <hr className="invis" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SecondMainPost;
