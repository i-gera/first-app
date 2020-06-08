import React, { FC } from "react";
import style from "./Posts.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {PostsReduxForm, PostsFormValuesType} from "./PostsForm";
import { PostsPropsType } from "./PostsContainer";

const Posts: FC<PostsPropsType> = ({postsPage, sendMessage}) => {
  let DialogElements = postsPage.Dialogs.map((d) => (
    <Dialog name={d.name} id={d.id} />
  ));

  let MessageElements = postsPage.Messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let addPostForm = (value: PostsFormValuesType) => {
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

export default Posts;
