import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/Auth.Context";

const ProtectedView = ({ children }) => {
  const { pathname } = useLocation();
  const { userProfile } = useAuth();

  console.log({ userProfile });

  if (pathname === "/login" && !userProfile) {
    return children;
  }

  if (!userProfile) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedView;
