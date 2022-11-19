import { useRouter } from "next/router";
import authhor from "../upload/author_02.jpg";
import Link from "next/link";

const CubBox = () => {
  const router = useRouter();
  return (
    <>
      <div className="blog-box">
        <div className="post-media">
          <a href="single.html" title="">
            <img src={authhor.src} alt="" className="img-fluid" />
            <div className="hovereffect">
              <span></span>
            </div>
          </a>
        </div>
        <div className="blog-meta">
          <span
            className={`${
              router.query?.first === "Энтертайнмент"
                ? "bg-blue"
                : router.query?.first === "Зөвлөгөө"
                ? "bg-pink"
                : router.query?.first === "Технологи"
                ? "bg-red"
                : router.query?.first === "Хэвмаяг"
                ? "bg-aqua"
                : router.query?.first === "Дизайн"
                ? "bg-green"
                : router.query?.first === "Спорт"
                ? "bg-grey"
                : router.query?.first === "Дэлхий"
                ? "color-grey"
                : ""
            }`}
          >
            <Link href={`/${router.query?.first}`}>
              <a>{router.query?.first}</a>
            </Link>
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
