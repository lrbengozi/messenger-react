import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { IUserData } from "./types";
import { getUserDataRequest } from "./util";

export const Profile = () => {
  const [userData, setUserData] = useState<IUserData | null>();
  const auth = useAuth();

  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const response = await getUserDataRequest();

    if (response) {
      const { name, email, profilePicture } = response;
      setUserData({ name, email, profilePicture });
    } else {
      auth.logout();
    }
  }

  return (
    <div>
      <h1>Profile {userData?.name}</h1>
      <h2>Email {userData?.email}</h2>
      <h2>Profile picture</h2>
      <img
        src={`data:image/jpeg;base64,${userData?.profilePicture}`}
        alt="ProfilePic"
      />

      <button onClick={auth.logout}>SAIR</button>
    </div>
  );
};
