import MiniSearch from "../components/miniSearch";
import PopularCategorys from "../components/popularCategory";
import RecentPosts from "../components/RecentPosts";
import Advertising from "../components/advertising";
import ImstagramFeed from "../components/instagramFeed";

const MiniSideBar = () => {
  return (
    <>
      <div className="sidebar">
        <MiniSearch />
        <RecentPosts />
        <Advertising />
        <ImstagramFeed />
        <PopularCategorys />
      </div>
    </>
  );
};

export default MiniSideBar;
