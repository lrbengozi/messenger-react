import { useState, useEffect } from "react";
import { ProfilePicture } from "../../components/ProfilePicture";
import { IUserData } from "./types";
import { getUserDataRequest } from "./util";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import "./style.scss";

async function getUserData() {
  const response = await getUserDataRequest();
  const { name, email, profilePicture } = response;
  return { name, email, profilePicture };
}

export const Profile = () => {
  const [userData, setUserData] = useState<IUserData | null>();

  useEffect(() => {
    const loadAll = async () => {
      const response = await getUserData();
      setUserData(response);
    };

    loadAll();
  }, []);

  function onChange(envent: any) {
    const { value, name } = envent.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  }

  return (
    <div className="container">
      <div className="box">
        <div className="box--title">
          <div className="box--title--header">
            <div className="arrow--back" onClick={() => {}}>
              <ArrowBackIcon style={{ fontSize: 35, color: "#fff" }} />
            </div>
            <h1>Profile</h1>
          </div>
        </div>
        <div className="box--content">
          <ProfilePicture profilePicture={userData?.profilePicture} />

          <br />
          {userData && (
            <div>
              <div className="float-label">
                <input
                  type="name"
                  name="name"
                  value={userData.name}
                  onChange={onChange}
                />
                <label
                  htmlFor="name"
                  className={userData.name ? "label--active" : ""}
                >
                  Nome
                </label>
              </div>

              <div className="float-label">
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={onChange}
                />
                <label
                  htmlFor="name"
                  className={userData.email ? "label--active" : ""}
                >
                  E-mail
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
