import React from "react";
import style from "./../../styles/Message.module.css";

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

export default Message;
