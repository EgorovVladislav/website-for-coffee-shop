import dessert1 from "../assets/desserts/dessert3.jpeg";
import dessert2 from "../assets/desserts/dessert1.jpeg";
import dessert3 from "../assets/desserts/dessert4.jpeg";
import dessert4 from "../assets/desserts/dessert5.jpeg";
import dessert5 from "../assets/desserts/dessert2.jpeg";
import dessert6 from "../assets/desserts/dessert7.jpeg";
import dessert7 from "../assets/desserts/dessert6.jpeg";
import dessert8 from "../assets/desserts/dessert9.jpeg";
import dessert9 from "../assets/desserts/dessert8.jpeg";

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

const arrImg = {
  desserts: [
    dessert1,
    dessert2,
    dessert3,
    dessert4,
    dessert5,
    dessert6,
    dessert7,
    dessert8,
    dessert9,
  ],
  drinks: [
    coffee1,
    coffee2,
    coffee3,
    coffee4,
    coffee5,
    coffee6,
    milkshake1,
    milkshake2,
    milkshake3,
    milkshake4,
    milkshake5,
    milkshake6,
  ],
};

export default function addImgData({ data, title }) {
  return data.map((item, index) => {
    item.images =
      arrImg[title] && arrImg[title][index] ? arrImg[title][index] : null;
    return item;
  });
}
