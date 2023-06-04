import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const { isAdmin, isAdminLoading } = useAdmin();

  if (loading || isAdminLoading) {
    return <div>Loading...</div>;
  }
  if (user && isAdmin) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoute;
