import React from "react";
import { NavLink } from "react-router-dom";
import st from "./Nav.module.scss";
import logo from "../../assets/logoWaffles.png";

export default function Nav({ openModal }) {
  return (
    <nav className={st.container}>
      <div className={st.containerLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={st.containerNav}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          Главная
        </NavLink>
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          Меню
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          О нас
        </NavLink>
        <NavLink
          to="/reviews"
          className={({ isActive }) => (isActive ? st.activeLink : st.link)}
        >
          Отзывы
        </NavLink>
      </div>

      <div className={st.containerBasket}>
        <button className={st.cartButton} onClick={openModal}>
          <i className="fa fa-shopping-basket"></i>
        </button>
      </div>
    </nav>
  );
}
