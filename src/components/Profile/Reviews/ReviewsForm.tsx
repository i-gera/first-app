import React, { FC } from "react";
// import style from "./Reviews.module.css";
import { InjectedFormProps, reduxForm } from "redux-form";
import { required, maxLengthCreator } from "../../../utils/validators/validator";
import { Textarea, fieldCreator } from "../../common/FormControls/FormControls";

export type ReviewFormValuesType = {
    newCommentBody: string 
}
type PropsType = {

}
type ReviewPropertiesTypeKeys  = Extract<keyof ReviewFormValuesType, string>;
const maxLength20 = maxLengthCreator(20);

const ReviewsForm: FC<InjectedFormProps<ReviewFormValuesType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {fieldCreator<ReviewPropertiesTypeKeys>(Textarea, "newCommentBody", "enter your comment", [required, maxLength20])}
        <div>
          <button type="submit">Add comment</button>
        </div>
    </form>
  );
};

export const ReviewsReduxForm = reduxForm<ReviewFormValuesType>({ form: "reviewsForm" })(ReviewsForm);

