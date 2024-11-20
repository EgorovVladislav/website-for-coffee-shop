import React from "react";
import Slider from "react-slick";
import st from "./Home.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className={st.homeContainer}>
      <div className={st.containerInfo}>
        <h2>Рады видеть вас в нашем уютном кафе!</h2>
        <p>
          Насладитесь вкусными блюдами и ароматным кофе в теплой атмосфере. Мы
          стремимся сделать ваше посещение незабываемым.
        </p>
        <p>Ждём вас по адресу: Бельского 2</p>
        <h3>Время работы:</h3>
        <p>Пн-пт: 09:00 - 21:00</p>
        <p>Сб-вс: 10:00 - 21:00</p>
        <p>Кухня работает до 20:20 !</p>
        <NavLink to="/menu" className={st.containerInfoBtn}>
          Сделать предзаказ
        </NavLink>
      </div>
      <div className={st.containerSlider}>
        <Slider {...settings}>
          <div className={st.slide}>
            <img src="/src/assets/coffee.jpg" alt="slide-1" />
            <div className={st.caption}>
              Кофе — второй по величине товарный рынок в мире после нефти!
            </div>
          </div>
          <div className={st.slide}>
            <img src="/src/assets/potatoPancakes.jpeg" alt="slide-2" />
            <div className={st.caption}>
              Драники содержат много витаминов и минералов!
            </div>
          </div>
          <div className={st.slide}>
            <img src="/src/assets/sandwich.png" alt="slide-3" />
            <div className={st.caption}>
              Сэндвичи были названы в честь лорда Сэндвича, который любил играть
              в карты!
            </div>
          </div>
          <div className={st.slide}>
            <img src="/src/assets/waffles.jpg" alt="slide-4" />
            <div className={st.caption}>
              Вафли готовят с 9 века и подавали с медом в средневековой Европе!
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
