import { useContext } from "react";
import "./Register.css";
import registerImage from "../../assets/others/authentication2.png";

import { AuthContext } from "../../providers/AuthProvider";
import { Link, Navigate, json, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Register = () => {
  const { signUp, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const saveUser = { name: data.name, email: data.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  reset();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User has been created successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  navigate("/login");
                  logOut()
                    .then(() => {})
                    .catch((error) => console.log(error));
                }
              });
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Register</title>
      </Helmet>

      <div className="register-container hero min-h-screen bg-base-200">
        <div className="inside-register-container shadow-2xl shadow-black hero-content flex-col lg:flex-row-reverse w-full">
          <div className="text-center md:w-1/2 mx-auto lg:text-left">
            <img src={registerImage} alt="" />
          </div>
          <div className="card md:w-1/2 w-full max-w-sm bg-transparent mx-auto">
            <h2 className="my-5 text-3xl text-center font-bold">Register</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                />
                {errors.photo && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "minLength" && (
                  <span className="text-red-600">6 characters required</span>
                )}
                {errors.password?.type === "required" && (
                  <span className="text-red-600">
                    Password field is required
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-600">
                    Pass must have one upper case, one lower case, one number
                    and one special character.
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054] normal-case border-none hover:bg-[#724f1b]"
                  type="submit"
                  value="Sign up"
                />
              </div>
              <p className="text-center my-2">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 font-bold">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
