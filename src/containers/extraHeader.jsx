import React from "react";

const TopBar = () => {
  return (
    <div className="topbar-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
            <div className="topsocial">
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Youtube"
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Pinterest"
              >
                <i className="fab fa-pinterest" />
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Flickr"
              >
                <i className="fab fa-flickr" />
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="#"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Google+"
              >
                <i className="fab fa-google-plus" />
              </a>
            </div>
          </div>

          <div className="col-lg-4 hidden-md-down">
            <div className="topmenu text-center">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="blog-category-01.html">
                    <i className="fa fa-star" /> Trends
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="blog-category-02.html">
                    <i className="fa fa-bolt" /> Hot Topics
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="page-contact.html">
                    <i className="fa fa-user-circle-o" /> Write for us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="topsearch text-right">
              <a
                data-toggle="collapse"
                href="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <i className="fa fa-search" /> Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
