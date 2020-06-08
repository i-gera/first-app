import React, { useState, FC, ChangeEvent } from "react";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "../ProfileStatus/ProfileStatus";
import Preloader from "../../common/Preloader/Preloader";
import userImg from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import { ProfileType, ContactsType } from "../../../types/types";

type PropsType = {
    profile: ProfileType | null
    isOwner: boolean
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photoFile: File) => void
}
const ProfileInfo: FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
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

export type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    activateEditMode: () => void
}

const ProfileData: FC<ProfileDataType> = ({ profile, isOwner, activateEditMode }) => {
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
              contactValue={profile.contacts[key as keyof ContactsType]}
            />
          );
        })}
      </div>
    </div>
  );
};

type ContactType = {
    contactTitle: string
    contactValue: string
}

const Contact: FC<ContactType> = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contact}>
      <b>{contactTitle}: </b>
      {contactValue}
    </div>
  );
};
export default ProfileInfo;
