// import React from "react";
import Reviews from "./Reviews";
import { addPost } from "../../redux/reducers/ProfilePage-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    Comments: state.ProfilePage.Comments,
    newPostText: state.ProfilePage.newPostText,
  };
};

const ReviewsContainer = connect(mapStateToProps, { addPost })(Reviews);

export default ReviewsContainer;
