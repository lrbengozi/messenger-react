import React from "react";
import { IProfilePictureProps } from "./types";
import { avatarPicture } from "./util";

import "./style.scss";

export const ProfilePicture: React.ElementType<IProfilePictureProps> = ({
  profilePicture,
}) => {
  return (
    <div className="box--img">
      {profilePicture && (
        <div>
          <img
            className="imgProfile"
            src={`data:image/jpeg;base64,${profilePicture}`}
            alt="ProfilePicture"
          />
          <div className="edit--photo" onClick={() => {}}>
            EDITAR
          </div>
        </div>
      )}

      {!profilePicture && (
        <div>
          <img
            className="imgProfile"
            src={`data:image/jpeg;base64,${avatarPicture}`}
            alt="AvatarPicture"
          />
          <div className="edit--photo" onClick={() => {}}>
            EDITAR
          </div>
        </div>
      )}
    </div>
  );
};
