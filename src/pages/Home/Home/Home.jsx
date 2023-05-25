import { Helmet } from "react-helmet-async";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Feartured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <AboutUs></AboutUs>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
