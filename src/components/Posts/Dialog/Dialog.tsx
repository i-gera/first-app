import React, { FC } from "react";
import style from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

type PropsType = {
    id: number
    name: string
}

const Dialog: FC<PropsType> = ({id, name}) => {
  let path = "/posts/" + id;
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default Dialog;
