import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { data } from "autoprefixer";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const totalBill = cart.reduce((sum, item) => item.price + sum, 0);
  const total = totalBill.toFixed(2);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div className="bg-white p-12 max-h-full min-h-[calc(100%-230px)] min-w-[95%] my-20">
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <h3>HHHH</h3>

      <div className="flex font-semibold h-24 items-center uppercase text-3xl justify-evenly">
        {" "}
        <h3>Total Orders: {cart.length}</h3>
        <h3>Total Price: ${total}</h3>
        <button className="btn btn-md bg-[#D1A054] border-none">PAY</button>
      </div>
      <div className="overflow-x-auto w-full ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th className="text-right">Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, i) => (
              <tr key={item._id}>
                <td>{i + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-right">${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-md bg-red-700 text-white hover:text-red-700 "
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default MyCart;
