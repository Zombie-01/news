import BigPost from "../components/bigPosts";

const BigPosts = ({ list }) => {
  return (
    <>
      <div class="blog-custom-build">
        {list.map((e, i) => (
          <>
            <BigPost />
          </>
        ))}
      </div>

      <hr class="invis"></hr>
    </>
  );
};

export default BigPosts;
