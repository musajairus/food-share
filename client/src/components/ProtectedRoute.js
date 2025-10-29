import React , {useContext} from "react";
import { Navigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(DataContext);
  
   if (!user) return <Navigate to="/signin" replace />;
  

  return children;
};

export default ProtectedRoute;
