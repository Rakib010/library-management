import Author from "../components/Author";
import Banner from "../components/Banner";
import Category from "../components/Category";
import FeaturedBooks from "../components/FeaturedBooks";
import { HeroSection } from "../components/HeroSection";
import Review from "../components/Review";

function Home() {
  return (
    <div>
      <HeroSection />
      <Category />
      <FeaturedBooks />
      <Author />
      <Banner />
      <Review />
    </div>
  );
}

export default Home;
