import blog_square_06 from "../upload/blog_square_06.jpg";
const RecentPosts = () => {
  const array = [1, 2, 3];
  return (
    <div className="widget">
      <h2 className="widget-title">Recent Posts</h2>
      <div className="blog-list-widget">
        <div className="list-group">
          {array.map((e, i) => (
            <a
              key={i}
              href="single.html"
              className="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div className="w-100 justify-content-between">
                <img
                  src={blog_square_06.src}
                  alt=""
                  className="img-fluid float-left"
                />
                <h5 className="mb-1">
                  5 Beautiful buildings you need to before dying
                </h5>
                <small>12 Jan, 2016</small>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
