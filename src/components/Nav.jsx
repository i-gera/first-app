import React from "react";
import style from "./../styles/Nav.module.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink to="/home" activeClassName={style.activeLink}>
            Главная
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/profile" activeClassName={style.activeLink}>
            Профиль
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/posts" activeClassName={style.activeLink}>
            Сообщения
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/friends" activeClassName={style.activeLink}>
            Друзья
          </NavLink>
        </li>
        <li className={style.item}>
          <NavLink to="/contacts" activeClassName={style.activeLink}>
            Контакты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
