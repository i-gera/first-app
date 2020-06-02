import React from "react";
import style from "./Reviews.module.css";
import { Field } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validator";
import { Textarea } from "../../common/FormControls/FormControls";


const maxLength20 = maxLengthCreator(20);
const ReviewsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={style.new}>
        <Field
          component={Textarea}
          name="newCommentBody"
          placeholder="enter your comment"
          validate={[required, maxLength20]}
        />
        <div>
          <button>Add comment</button>
        </div>
      </div>
    </form>
  );
};

export default ReviewsForm;
