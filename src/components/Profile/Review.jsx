import React from "react";
import style from "./../../styles/Review.module.css";
import userImg from "../../assets/images/user.png";

const Review = (props) => {
  return (
    <div className={style.item}>
      <img src={userImg} alt="jpg" />
      <span className={style.comment}>{props.comment}</span>
      <div className={style.like}>like: {props.likes}</div>
    </div>
  );
};

export default Review;
