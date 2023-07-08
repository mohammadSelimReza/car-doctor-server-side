import AboutUs from "../components/Home/AboutUs/AboutUs";
import Banner from "../components/Home/Banner/Banner";
import Info from "../components/Home/Info/InfoJSX/Info";
import Service from "../components/Home/Service/Servicefile/Service";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <Service />
      <Info />
    </div>
  );
};

export default Home;
