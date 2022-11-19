import PopularNews from "../sections/mainSecond";
import ImageNews from "../sections/mainFirst";
import Header from "../containers/header";
import Footer from "../containers/footer";

export default function Home() {
  return (
    <>
      <Header />
      <ImageNews />
      <PopularNews />
      <Footer />
    </>
  );
}
