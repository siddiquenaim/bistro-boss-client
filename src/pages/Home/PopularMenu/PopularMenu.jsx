import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <>
      <section className="my-12 w-[90%] mx-auto">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Popular Items"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
          {popular.map((item) => (
            <MenuItem item={item} key={item._id}></MenuItem>
          ))}
        </div>
        <div className="text-center">
          <button className="btn btn-outline text-black border-0 border-b-4 mt-6">
            View Full Menu
          </button>
        </div>
      </section>
    </>
  );
};

export default PopularMenu;
