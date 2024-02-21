import { Navigate, useLocation } from "react-router-dom";

const isLogged = false;
const ProtectedView = ({ children }) => {
  const { pathname } = useLocation();

  console.log({ pathname });

  // Case 1  - When user is not logged in but opening /login
  // Render Login page
  if (!isLogged && pathname !== "/login") {
    //redirect to Login page
    return <Navigate to="/login" replace={true} />;
  }

  // Case 2 - When user is !LoggedIn but opening any page other than login
  // Redirect to login

  // Case 3 - When user is LoggedIn but opening /login page
  // Redirect to home

  // Case 4 - Everything is okay - LoggedIn & opening /order or /home or /
  // Render as it is children render

  return children;
};
export default ProtectedView;
