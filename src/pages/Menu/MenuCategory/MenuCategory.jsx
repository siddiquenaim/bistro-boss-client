import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, coverImage, title, desc }) => {
  return (
    <div>
      {title && (
        <Cover backgroundImage={coverImage} title={title} desc={desc}></Cover>
      )}
      {items && (
        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {items.map((item) => (
            <MenuItem item={item} key={item._id}></MenuItem>
          ))}
        </div>
      )}
      {items && (
        <div className="text-center">
          <button className="btn btn-outline text-black border-0 border-b-4 mt-6">
            Order Your Favorite Food
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
