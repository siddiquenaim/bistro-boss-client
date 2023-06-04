import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const { user } = useContext(AuthContext);

  // TODO: load data from the server to have dynamic isAdmin data
  // const isAdmin = true;
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile bg-[#F6F6F6]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <ul className="menu p-4 w-80 bg-[#D1A054] text-black ">
          <h1 className="uppercase p-4 mb-14">
            <span className="font-extrabold text-2xl flex-col">
              Bistro Boss
              <br />
              <span className="text-lg font-normal">R e s t a u r a n t</span>
            </span>
          </h1>

          {isAdmin ? (
            <>
              <li className="hover:text-white">
                <NavLink to="/dashboard/admin-home">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink to="/dashboard/add-items">
                  <FaUtensils></FaUtensils> Add Items
                </NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink to="/dashboard/manage-items">
                  <FaBars></FaBars> Manage Items
                </NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink to="/dashboard/manage-bookings">
                  <FaBook></FaBook> Manage Bookings
                </NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink to="/dashboard/all-users">
                  <FaUsers></FaUsers> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li className="hover:text-white">
                <NavLink to="/dashboard/user-home">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink to="/dashboard/reservations">
                  <FaCalendarAlt></FaCalendarAlt> Reservations
                </NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink to="/dashboard/myCart">
                  <FaShoppingCart></FaShoppingCart> My Cart{" "}
                  <div className="badge badge-secondary">
                    {cart ? cart.length : 0}
                  </div>
                </NavLink>
              </li>
              <li className="hover:text-white">
                <NavLink to="/dashboard/payment-history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
            </>
          )}

          {/*  */}
          <div className="divider"></div>
          {/*  */}

          <li className="hover:text-white">
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/menu">
              <FaBars></FaBars> Our Menu
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/order/salad">
              <FaShoppingBag></FaShoppingBag> Order Food
            </NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/">
              <FaEnvelope></FaEnvelope> Contact
            </NavLink>
          </li>
          <div className="divider"></div>
          {user?.photoURL && (
            <div className="flex items-center gap-6">
              <div className="avatar">
                <div className="w-12 rounded-full hover:ring cursor-pointer ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <div className="font-semibold">{user?.displayName}</div>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
