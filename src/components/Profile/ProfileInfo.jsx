import React from "react";
import style from "../../styles/ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatusWithHooks";
import Preloader from "../common/Preloader";
import userImg from "../../assets/images/user.png";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={style.userProfile}>
        <div>
          <div className={style.userimg}>
            <img
              src={
                props.profile.photos.large
                  ? props.profile.photos.large
                  : userImg
              }
              alt=""
            />
          </div>
          {props.isOwner && (
            <div>
              <input type="file" onChange={onPhotoSelected} />
            </div>
          )}
          <div>{props.profile.aboutMe}</div>
        </div>
        <div>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <p>{props.profile.contacts.facebook}</p>
          <p>{props.profile.contacts.twitter}</p>
          <p>{props.profile.contacts.instagram}</p>
          <p>{props.profile.contacts.github}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
