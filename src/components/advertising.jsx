import banner from "../upload/banner_03.jpg";

const Advertising = () => {
  return (
    <div className="widget">
      <h2 className="widget-title">Advertising</h2>
      <div className="banner-spot clearfix">
        <div className="banner-img">
          <img src={banner.src} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Advertising;
