import Link from "next/link";
import { useRouter } from "next/router";

const PageTitle = () => {
  const router = useRouter();
  return (
    <>
      <div className="page-title wb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h2>
                <i
                  className={`fa fa-shopping-bag ${
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
                ></i>
                {router.query?.first}
              </h2>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
              <ol className="breadcrum">
                <li className="breadcrumb-item">
                  <Link href="/">
                    <a>Эхлэл</a>
                  </Link>
                </li>
                {router.query?.second ? (
                  <>
                    <li className="breadcrumb-item">
                      <Link href={`/${router.query?.first}`}>
                        <a>{router.query?.first}</a>
                      </Link>
                    </li>
                    <li className="breadcrumb-item active">
                      {router.query?.second}
                    </li>
                  </>
                ) : (
                  <li className="breadcrumb-item active">
                    {router.query?.first}
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
