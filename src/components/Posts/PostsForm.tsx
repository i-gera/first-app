import React, { FC } from "react";
// import style from "../../styles/Posts.module.css";
import { reduxForm, InjectedFormProps } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validator";
import { Textarea, fieldCreator } from "../common/FormControls/FormControls";

export type PostsFormValuesType = {
    newMessageBody: string 
}

type PostsPropertiesTypeKeys  = Extract<keyof PostsFormValuesType, string>;

const maxLength10 = maxLengthCreator(30);

const PostsForm: FC<InjectedFormProps<PostsFormValuesType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {fieldCreator<PostsPropertiesTypeKeys>(Textarea, "newMessageBody", "write message...", [required, maxLength10])}
      <div>
        <button>SEND</button>
      </div>
    </form>
  );
};

export const PostsReduxForm = reduxForm<PostsFormValuesType>({ form: "postsForm" })(PostsForm);

