import { Navigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

function PrivateRoute({ children }) {
  const { logado } = useAuthContext();

  if (!logado) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default PrivateRoute;