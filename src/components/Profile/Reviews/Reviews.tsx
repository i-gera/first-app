import React, { FC } from "react";
import style from "./Reviews.module.css";
import Review from "./Review";
import ReviewsForm from "./ReviewsForm";
import { reduxForm } from "redux-form";
import { PropsType } from "./ReviewsTypes";

const Reviews: FC<PropsType> = React.memo((props) => {
  console.log("render");

  let commentElements = [...props.Comments]
    .reverse()
    .map((c) => <Review comment={c.comment} likes={c.likes} />);

  let addReviewForm = (value:any) => {
    props.addPost(value.newCommentBody);
  };

  return (
    <div>
      <ReviewsReduxForm onSubmit={addReviewForm} />
      <div className={style.reviews}>
        <div>My Comments</div>
        {commentElements}
      </div>
    </div>
  );
});

const ReviewsReduxForm = reduxForm({ form: "reviewsForm" })(ReviewsForm);

export default Reviews;
