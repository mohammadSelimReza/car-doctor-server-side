import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Header/Nav";

const Main = () => {
  return (
    <div>
      <div className="max-w-screen-3xl mx-auto">
        <Nav />
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Main;
