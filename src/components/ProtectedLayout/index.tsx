import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.token) {
    return children;
  } else {
    navigate("/login");

    return <h2>You don't have access!</h2>;
  }
};
