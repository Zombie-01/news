import banner_02 from "../upload/banner_02.jpg";
import Img from "./img";
const Banner = () => {
  return (
    <>
      <div className="col-lg-10 offset-lg-1">
        <div className="banner-spot clearfix">
          <div className="banner-img">
            <Img src={banner_02.src} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
