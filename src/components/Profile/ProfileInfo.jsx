import React, { useState } from "react";
import style from "../../styles/ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatusWithHooks";
import Preloader from "../common/Preloader";
import userImg from "../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <div className={style.userProfile}>
      <div>
        <div className={style.userimg}>
          <img
            src={
              props.profile.photos.large ? props.profile.photos.large : userImg
            }
            alt=""
          />
        </div>
        {props.isOwner && (
          <div>
            <input type="file" onChange={onPhotoSelected} />
          </div>
        )}
      </div>
      <div>
        <div>
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
          />
          {editMode ? (
            <ProfileDataForm profile={props.profile} />
          ) : (
            <ProfileData
              activateEditMode={() => {
                setEditMode(true);
              }}
              profile={props.profile}
              isOwner={props.isOwner}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, activateEditMode }) => {
  return (
    <div>
      {isOwner && (
        <div>
          <button onClick={activateEditMode}>Edit profile</button>
        </div>
      )}
      <div>
        <b>Full name: </b>
        {profile.fullName}
      </div>
      <div>
        <b>About me: </b>
        {profile.aboutMe}
      </div>
      <div>
        <b>Looking for a job: </b>
        {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills: </b>
          {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contact}>
      <b>{contactTitle}: </b>
      {contactValue}
    </div>
  );
};
export default ProfileInfo;
