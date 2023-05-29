import { useContext, useEffect, useRef, useState } from "react";
import "./Login.css";
import loginImage from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logged in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleValidateCaptcha = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>

      <div className="login-container hero min-h-screen bg-base-200">
        <div className="inside-login-container shadow-2xl shadow-black hero-content flex-col lg:flex-row w-full">
          <div className="text-center md:w-1/2 mx-auto lg:text-left">
            <img src={loginImage} alt="" />
          </div>
          <div className="card md:w-1/2 w-full max-w-sm bg-transparent mx-auto">
            <h2 className="my-5 text-3xl text-center font-bold">Login</h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  placeholder="type captcha"
                  className="input input-bordered"
                  onBlur={handleValidateCaptcha}
                />
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054] normal-case border-none hover:bg-[#724f1b]"
                  type="submit"
                  value="Sign in"
                  disabled={disabled}
                />
              </div>
              <p className="text-center my-2">
                New to this website?{" "}
                <Link to="/register" className="text-blue-500 font-bold">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
