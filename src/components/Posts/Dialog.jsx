import React from "react";
import style from "./../../styles/Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
  let path = "/posts/" + props.id;
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;
