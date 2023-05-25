import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) =>
        setMenu(data.filter((item) => item.category === "popular"))
      );
  }, []);
  return (
    <>
      <section className="my-12">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Popular Items"}
        ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-10">
          {menu.map((item) => (
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
