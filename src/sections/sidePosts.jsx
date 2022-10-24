import SideMiniPost from "../components/sideMiniPost";
const SidePosts = ({ title }) => {
  const sideMiniPost = [1, 2, 3];
  return (
    <>
      <div className="section-title">
        <h3
          className={
            title === "Vlog"
              ? `color-yellow`
              : title === "Health"
              ? "color-grey"
              : ""
          }
        >
          <a href="blog-category-01.html" title="">
            {title}
            Vlogs
          </a>
        </h3>
      </div>

      {sideMiniPost.map((e, i) => (
        <div key={i}>
          <SideMiniPost />
        </div>
      ))}
    </>
  );
};

export default SidePosts;
