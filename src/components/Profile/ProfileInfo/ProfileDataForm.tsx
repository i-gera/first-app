import React, { FC } from "react";
import { ProfileType } from "../../../types/types";

type PropsType = {
    profile: ProfileType
}

const ProfileDataForm: FC<PropsType> = ({ profile }) => {
  return (
    <div>
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
          return <div>contacts</div>;
        })}
      </div>
    </div>
  );
};

export default ProfileDataForm;
