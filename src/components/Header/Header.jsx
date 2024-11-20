import React from "react";
import st from "./Header.module.scss";
import Nav from "../Nav/Nav";

export default function Header({ openModal, totalItems }) {
  return (
    <header className={st.headerContainer}>
      <Nav openModal={openModal} totalItems={totalItems} />
    </header>
  );
}
