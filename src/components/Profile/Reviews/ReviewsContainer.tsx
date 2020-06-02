// import React from "react";
import Reviews from "./Reviews";
import { addPost } from "../../../redux/reducers/profile-reducer";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import { MapStatePropsType, MapDispatchPropsType, OwnPropsType } from "./ReviewsTypes";

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    Comments: state.ProfilePage.Comments,
    newPostText: state.ProfilePage.newPostText,
  };
};

const ReviewsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { addPost })(Reviews);

export default ReviewsContainer;
