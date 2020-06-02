import React, {FC} from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { PropsType } from "./HeaderTypes";

const Header: FC<PropsType> = ({login, isAuth, logout}) => {
  return (
    <header className={style.header}>
      <img
        src="https://vbfa.church/wp-content/uploads/2019/12/Transparent-Logo-for-vbfa-site.png"
        alt=""
      />
      <div className={style.loginBlock}>
        {isAuth ? (
          <div>
            {login} <button onClick={logout}>sign out</button>
          </div>
        ) : (
          <NavLink to="/login">SIGN IN</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
