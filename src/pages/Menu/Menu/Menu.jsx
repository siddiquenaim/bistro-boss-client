import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
import dessertImage from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImage from "../../../assets/menu/pizza-bg.jpg";
import saladImage from "../../../assets/menu/salad-bg.jpg";
import soupImage from "../../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <MenuCategory title={"Let's go"} coverImage={menuImage}></MenuCategory>
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's offer"}
      ></SectionTitle>
      <div className="my-20 w-[90%] mx-auto">
        <MenuCategory items={offered}></MenuCategory>
      </div>
      <div className="my-20 w-[90%] mx-auto">
        <MenuCategory
          title={"Desserts"}
          coverImage={dessertImage}
          items={dessert}
          desc={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quas nulla odio repellendus ratione officia, vero blanditiis vitae rem id."
          }
        ></MenuCategory>
      </div>
      <div className="my-20 w-[90%] mx-auto">
        <MenuCategory
          title={"Pizza"}
          coverImage={pizzaImage}
          items={pizza}
          desc={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quas nulla odio repellendus ratione officia, vero blanditiis vitae rem id."
          }
        ></MenuCategory>
      </div>
      <div className="my-20 w-[90%] mx-auto">
        <MenuCategory
          title={"Salads"}
          coverImage={saladImage}
          items={salad}
          desc={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quas nulla odio repellendus ratione officia, vero blanditiis vitae rem id."
          }
        ></MenuCategory>
      </div>
      <div className="my-20 w-[90%] mx-auto">
        <MenuCategory
          title={"Soups"}
          coverImage={soupImage}
          items={soup}
          desc={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quas nulla odio repellendus ratione officia, vero blanditiis vitae rem id."
          }
        ></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
