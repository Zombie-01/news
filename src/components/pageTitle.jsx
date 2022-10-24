const PageTitle = ({ title }) => {
  return (
    <>
      <div className="page-title wb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <h2>
                <i
                  className={`fa fa-shopping-bag ${
                    title === "Fashion"
                      ? "bg-pink"
                      : title === "Food & Drink"
                      ? "bg-red"
                      : title === "Lifestyle"
                      ? "bg-aqua"
                      : title === "Travel"
                      ? "bg-green"
                      : ""
                  }`}
                ></i>{" "}
                {title}
                <small className="hidden-xs-down hidden-sm-down">
                  Nulla felis eros, varius sit amet volutpat non.{" "}
                </small>
              </h2>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
              <ol className="breadcrum">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">Blog</a>
                </li>
                <li className="breadcrumb-item active">{title}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTitle;
