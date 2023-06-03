import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        const loggedUser = res.user;
        const saveUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
        };
        console.log(loggedUser);
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {" "}
      <div className="divider">Or</div>
      <div className="text-center">
        {" "}
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline border-[#1442C9] text-[#1442C9] font-bold hover:bg-[#1442C9] hover:border-none mr-4"
        >
          <FaGoogle></FaGoogle>
        </button>
        <button className="btn btn-circle btn-outline">
          <FaGithub></FaGithub>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
