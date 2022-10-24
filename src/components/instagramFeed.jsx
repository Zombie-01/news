import image from "../upload/insta_01.jpeg";
import Img from "./img";
const ImstagramFeed = () => {
  return (
    <div className="widget">
      <h2 className="widget-title">Instagram Feed</h2>
      <div className="instagram-wrapper clearfix">
        <a className="" href="#">
          <Img src={image.src} alt="" className="img-fluid" />
        </a>
        <a href="#">
          <Img src={image.src} alt="" className="img-fluid" />
        </a>
        <a href="#">
          <Img src={image.src} alt="" className="img-fluid" />
        </a>
        <a href="#">
          <Img src={image.src} alt="" className="img-fluid" />
        </a>
        <a href="#">
          <Img src={image.src} alt="" className="img-fluid" />
        </a>
        <a href="#">
          <Img src={image.src} alt="" className="img-fluid" />
        </a>
        <a href="#">
          <Img src={image.src} alt="" className="img-fluid" />
        </a>
        <a href="#">
          <Img src={image.src} alt="" className="img-fluid" />
        </a>
        <a href="#">
          <Img src={image.src} alt="" className="img-fluid" />
        </a>
      </div>
    </div>
  );
};

export default ImstagramFeed;
