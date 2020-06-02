import React from "react";
// import style from "../../styles/Posts.module.css";
import { Field } from "redux-form";
import { required, maxLengthCreator } from "../../utils/validators/validator";
import { Textarea } from "../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(30);
const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          name="newMessageBody"
          placeholder="write message..."
          validate={[required, maxLength10]}
        />
      </div>
      <div>
        <button>SEND</button>
      </div>
    </form>
  );
};

export default PostsForm;
