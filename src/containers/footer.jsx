import PopularCategorys from "../components/popularCategory";
import RecentPosts from "../components/RecentPosts";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <RecentPosts />
          <RecentPosts />
          <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
            <PopularCategorys />
          </div>
        </div>

        <hr className="invis1" />

        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="widget">
              <div className="footer-text text-center">
                <a href="index.html">
                  <img src="images/flogo.png" alt="" className="img-fluid" />
                </a>
                <p>
                  Cloapedia is a personal blog for handcrafted, cameramade
                  photography content, fashion styles from independent creatives
                  around the world.
                </p>
                <div className="social">
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
                    title="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Google Plus"
                  >
                    <i className="fab fa-google-plus"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Pinterest"
                  >
                    <i className="fab fa-pinterest"></i>
                  </a>
                </div>

                <hr className="invis" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <br />
            <div className="copyright">
              &copy; zombie. Design: <a href="http://html.design">Zombies</a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
