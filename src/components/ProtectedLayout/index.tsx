import React from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { message } from "antd";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.token) {
    return <h2>You don't have access!</h2>;
  }

  return children;
};
