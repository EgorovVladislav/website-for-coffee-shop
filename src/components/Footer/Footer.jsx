import React from "react";
import st from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={st.footerContainer}>
      <a href="https://www.instagram.com/e_blinnaya/">
        <i className="fa fa-instagram">
          <p>Инстаграм</p>
        </i>
      </a>
      <i className="fa fa-map">
        <p>Наш адрес - Бельского 2 </p>
      </i>
    </footer>
  );
}
