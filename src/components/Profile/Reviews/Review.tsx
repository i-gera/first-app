import React, { FC } from "react";
import style from "./Review.module.css";
import userImg from "../../../assets/images/user.png";

type PropsType = {
    comment: string
    likes: number
}
const Review: FC<PropsType> = (props) => {
  return (
    <div className={style.item}>
      <img src={userImg} alt="jpg" />
      <span className={style.comment}>{props.comment}</span>
      <div className={style.like}>like: {props.likes}</div>
    </div>
  );
};

export default Review;
