import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover backgroundImage={menuImage}></Cover>
      <h2>This is menu</h2>
    </div>
  );
};

export default Menu;
