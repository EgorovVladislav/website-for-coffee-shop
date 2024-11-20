import React from "react";
import st from "./MenuNav.module.scss";

export default function MenuNav({
  title,
  id,
  editNavIndex,
  index,
  activeIndex,
}) {
  return (
    <div className={st.containerNav}>
      <button
        onClick={() => editNavIndex(index)}
        className={activeIndex === index ? st.active : ""}
      >
        {title}
      </button>
    </div>
  );
}
