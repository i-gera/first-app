import React, { FC } from "react";
// import style from './styles/Profile.module.css';
import ReviewsContainer from "./Reviews/ReviewsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfileType } from "../../types/types";

type PropsType = {
    isOwner: boolean
    profile: ProfileType
    status: string

    savePhoto: () => void
    updateStatus: () => void
}
const Profile: FC<PropsType> = (props) => {
  return (
    <div>
      <ProfileInfo
        savePhoto={props.savePhoto}
        isOwner={props.isOwner}
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <ReviewsContainer />
    </div>
  );
};

export default Profile;
