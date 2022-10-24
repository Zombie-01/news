import banner_02 from "../upload/banner_02.jpg";
const Banner = () => {
  return (
    <>
      <div className="col-lg-10 offset-lg-1">
        <div className="banner-spot clearfix">
          <div className="banner-img">
            <img src={banner_02.src} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
