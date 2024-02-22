import ReactDOM from "react-dom/client";
import Navigation from "./navigation/Navigation.Layout.jsx";
import AuthProvider from "./contexts/Auth.Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Navigation />
  </AuthProvider>
);
