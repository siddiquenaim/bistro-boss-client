import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <div className="max-w-screen-2xl mx-auto min-h-[calc(100vh-470px)]">
        <div className=" mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
