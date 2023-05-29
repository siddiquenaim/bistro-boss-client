import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-full bg-[#F3F3F3] rounded-none">
      <figure>
        <img className="w-[424px] h-[300px]" src={image} alt="Shoes" />
      </figure>
      <div className="card-body text-center">
        <h2 className="text-center">{name}</h2>
        <p>Price: {price}$</p>
        <p>Recipe: {recipe}</p>
        <div className=" justify-end text-center">
          <button className="btn btn-outline bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506] mt-6 hover:bg-black hover:text-[#BB8506] hover:border-b-4 hover:border-[#BB8506]">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
