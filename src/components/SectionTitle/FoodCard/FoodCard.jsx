import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { _id, name, image, price, recipe } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user?.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user?.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); //refetch cart to update the number of items in the cart
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Item has been added to your cart!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to order your food!",

        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-full bg-[#F3F3F3] rounded-none">
      <figure className="relative">
        <img className="w-[424px] h-[300px]" src={image} alt="Shoes" />
        <p className="bg-[#111827] px-4 py-2 top-4 right-4 text-white absolute font-bold">
          ${price}
        </p>
      </figure>
      <div className="card-body text-center">
        <h2 className="text-center font-bold text-xl">{name}</h2>
        <p>Recipe: {recipe}</p>
        <div className=" justify-end text-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506] mt-6 hover:bg-black hover:text-[#BB8506] hover:border-b-4 hover:border-[#BB8506]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
