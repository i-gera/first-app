import React from "react";
import preloader from "../../assets/images/preloader.svg";
import style from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={style.preloader}>
      <div className={style.preloader__img}>
        <img src={preloader} alt="" />
      </div>
    </div>
  );
};

export default Preloader;
