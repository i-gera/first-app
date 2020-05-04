import React from "react";
import style from "../../styles/Posts.module.css";
import Dialog from "./Dialog";
import Message from "./Message";
import PostsForm from "./PostsForm";
import { reduxForm } from "redux-form";

const Posts = (props) => {
  let DialogElements = props.Dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));

  let MessageElements = props.Messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let addPostForm = (value) => {
    props.sendMessage(value.newMessageBody);
  };

  return (
    <div className={style.dialogs}>
      <div className={style.names}>{DialogElements}</div>
      <div className={style.messages}>
        <div>{MessageElements}</div>
        <PostsReduxForm onSubmit={addPostForm} />
      </div>
    </div>
  );
};

const PostsReduxForm = reduxForm({ form: "postsForm" })(PostsForm);

export default Posts;
