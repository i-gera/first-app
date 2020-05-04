import React from "react";
// import style from '../../styles/Profile.module.css';
import ReviewsContainer from "./ReviewsContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <ReviewsContainer />
    </div>
  );
};

export default Profile;
