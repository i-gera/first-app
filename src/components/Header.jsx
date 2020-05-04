import React from "react";
import style from "./../styles/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img
        src="https://vbfa.church/wp-content/uploads/2019/12/Transparent-Logo-for-vbfa-site.png"
        alt=""
      />
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} <button onClick={props.logout}>sign out</button>
          </div>
        ) : (
          <NavLink to="/login">SIGN IN</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
