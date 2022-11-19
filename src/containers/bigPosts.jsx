import BigPost from "../components/bigPosts";

const BigPosts = ({ list }) => {
  return (
    <>
      <div className="blog-custom-build">
        {list.map((e, i) => (
          <>
            <BigPost />
          </>
        ))}
      </div>

      <hr className="invis"></hr>
    </>
  );
};

export default BigPosts;
