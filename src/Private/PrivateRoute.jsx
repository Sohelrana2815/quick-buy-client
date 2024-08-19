import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/signIn" />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired, // PropTypes.node indicates anything that can be rendered: numbers, strings, elements or an array (or fragment) containing these types
};

export default PrivateRoute;
