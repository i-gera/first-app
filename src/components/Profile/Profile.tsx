import React, { FC } from "react";
// import style from './styles/Profile.module.css';
import ReviewsContainer from "./Reviews/ReviewsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfileType } from "../../types/types";

type PropsType = {
    isOwner: boolean
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    savePhoto: (photoFile: File) => void
}

const Profile: FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}

            />
            <ReviewsContainer />
        </div>
    );
};

export default Profile;
