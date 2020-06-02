import React, { FC } from "react";
import style from "./Posts.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import PostsForm from "./PostsForm";
import { reduxForm } from "redux-form";
import { PropsType } from "./PostsTypes";

const Posts: FC<PropsType> = ({Dialogs, Messages, sendMessage}) => {
  let DialogElements = Dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));

  let MessageElements = Messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let addPostForm = (value) => {
    sendMessage(value.newMessageBody);
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
