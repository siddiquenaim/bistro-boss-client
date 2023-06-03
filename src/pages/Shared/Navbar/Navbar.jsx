import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      {" "}
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order</NavLink>
      </li>
      {!user ? (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      ) : (
        <>
          <li onClick={handleLogout}>
            <Link className="bg-transparent">Logout</Link>
          </li>
          <li>
            <NavLink to="/dashboard/myCart">
              <button className="btn bg-transparent hover:bg-transparent border-none text-xl gap-2 text-black lg:text-white">
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">
                  {cart ? cart.length : 0}
                </div>
              </button>
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="navbar bg-black text-white fixed z-10 bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black space-x-2"
            >
              {navOptions}
            </ul>
          </div>
          <h1 className="uppercase">
            <span className="font-extrabold text-2xl flex-col">
              Bistro Boss
              <br />
              <span className="text-lg font-normal">R e s t a u r a n t</span>
            </span>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{navOptions}</ul>
        </div>
        {user?.photoURL && (
          <div className="navbar-end">
            <div className="avatar">
              <div className="w-12 rounded-full hover:ring cursor-pointer ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
