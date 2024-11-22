// common/addDataDrinks.js

import coffee1 from "../assets/drinks/coffee1.jpeg";
import coffee2 from "../assets/drinks/coffee2.jpeg";
import coffee3 from "../assets/drinks/coffee3.jpeg";
import coffee4 from "../assets/drinks/coffee4.jpg";
import coffee5 from "../assets/drinks/coffee5.jpeg";
import coffee6 from "../assets/drinks/coffee6.jpg";

import milkshake1 from "../assets/drinks/milkshake1.jpeg";
import milkshake2 from "../assets/drinks/milkshake2.jpeg";
import milkshake3 from "../assets/drinks/milkshake3.jpeg";
import milkshake4 from "../assets/drinks/milkshake4.jpeg";
import milkshake5 from "../assets/drinks/milkshake5.jpeg";
import milkshake6 from "../assets/drinks/milkshake6.jpeg";

const images = {
  Эспрессо: coffee1,
  Американо: coffee2,
  "Флет Уайт": coffee3,
  Капучино: coffee4,
  Гляссе: coffee5,
  Латте: coffee6,
  // Молочные коктейли
  Классический: milkshake1,
  "Клубнично-банановый": milkshake2,
  "Банано-клубничный": milkshake3,
  "Пина колада": milkshake4,
  Сникерс: milkshake5,
  Баунти: milkshake6,
};

export default function addDataDrinks({ data, title }) {
  return data.map((subcategory) => {
    const image = images[subcategory.title] || null;

    return {
      ...subcategory,
      image: image,
    };
  });
}
