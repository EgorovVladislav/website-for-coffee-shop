import React, { useState } from "react";
import st from "./Main.module.scss";
import { Outlet } from "react-router-dom";
import Modal from "../../pages/Modal/Modal";
import Nav from "../Nav/Nav";

export default function Main() {
  return (
    <main className={st.mainContainer}>
      <Outlet />
    </main>
  );
}
