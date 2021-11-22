import { useAuth } from "../../context/AuthProvider/useAuth";

export const Profile = () => {
  const auth = useAuth();
  return <h2>Profile {auth.email}</h2>;
};
