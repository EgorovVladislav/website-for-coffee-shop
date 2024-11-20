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
  coffee: [coffee1, coffee2, coffee3, coffee4, coffee5, coffee6],
  milkshake: [
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
    if (item.subcategories) {
      item.subcategories = item.subcategories.map((subcategory, subIndex) => {
        subcategory.images =
          arrImg[title] && arrImg[title][subIndex]
            ? arrImg[title][subIndex]
            : null;
        return subcategory;
      });
    }
    return item;
  });
}
