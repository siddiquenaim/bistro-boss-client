import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleDelete = (_id) => {
    console.log(_id);
  };

  const handleMakeAdmin = (_id) => {
    fetch(`http://localhost:5000/users/admin/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Custom width, padding, color, background.",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff",
            backdrop: `
            rgba(0,0,123,0.4)
            url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPhWS-lkcnVQOp8Vqz6t_g98aw0_5LNHUXgazmlyLrPw&s")
            left top
            no-repeat
          `,
          });
        }
      });
  };

  return (
    <div className="w-full mx-auto p-4">
      <Helmet>
        <title>Bistro Boss | All Users</title>
      </Helmet>
      <h2 className="text-3xl font-semibold">Total Users: {users.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra my-10 w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-ghost btn-md bg-orange-500 text-white hover:text-orange-500"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost btn-md bg-red-700 text-white hover:text-red-700 "
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
