import React, { useState } from "react";
import st from "./About.module.scss";
export default function About() {
  const yandexMapsLink =
    "https://yandex.by/maps/157/minsk/?ll=27.480774%2C53.906666&mode=poi&poi%5Bpoint%5D=27.480676%2C53.906623&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D44153706603&z=21";

  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };
  const handleMouseLeave = () => {
    setShowTooltip(false);
  };
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setTooltipPosition({ top: clientY + 10, left: clientX + 10 });
  };
  return (
    <div className={st.aboutContainer}>
      <div className={st.aboutContainerInfo}>
        <div className={st.containerUs}>
          <div className={st.usCafe}>
            <h2>О нашей кофейне</h2>
            <p>
              Наша кофейня была основана в 2020 году с целью создать уютное
              пространство для всех любителей кофе. Мы предлагаем широкий
              ассортимент кофе, блюд и десертов, приготовленных с любовью.
            </p>
          </div>
          <div className={st.usTeam}>
            <h2>Наша команда</h2>
            <p>
              Наша команда состоит из опытных барист, которые страстно любят
              своё дело и всегда готовы порадовать вас вкусом и качеством. Мы
              постоянно обучаемся и следим за новыми тенденциями в мире кофе.
            </p>
          </div>
        </div>
        <div className={st.containerNumber}>
          <h3>Контактная информация</h3>
          <p>
            Адрес: ул. Бельского, 2
            <br />
            Телефон: *************
          </p>
          <p>
            Время работы:
            <br /> Пн-пт: 09:00 - 21:00 <br />
            Сб-вс: 10:00 - 21:00
          </p>
          <p>Кухня закрывается в 20:20!</p>
        </div>
      </div>
      <div className={st.containerMap}>
        <a
          href={yandexMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          <img src="/src/assets/map.png" alt="map" />
        </a>
      </div>
      {showTooltip && (
        <div
          className={st.tooltip}
          style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
        >
          Перейти на Яндекс.Карты
        </div>
      )}
    </div>
  );
}
