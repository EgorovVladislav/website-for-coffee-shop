import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import MenuNav from "../MenuNav/MenuNav";
import st from "./Menu.module.scss";
//-------------Data-------------//
import drinksData from "../../data/drinks.json";
import dessertData from "../../data/dessert.json";
import NavigationMenu from "../../data/nav.json";
import kitchenData from "../../data/kitchen.json";
//-------------Common-------------//
import addImgData from "../../common/addDataImg";

export default function Menu({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [navItem, setNavItem] = useState([]);
  const [activeNavIndex, setActiveNavIndex] = useState(0);
  const [activeSubcategoryIndex, setActiveSubcategoryIndex] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  const handleEditNavIndex = (index) => {
    setActiveNavIndex(index);
    setActiveSubcategoryIndex(null);
    setProducts([]);

    if (index === 1) {
      setSubcategories(drinksData);
    } else if (index === 2) {
      setSubcategories(kitchenData);
    } else {
      const updatedProducts = addImgData({
        data: dessertData,
        title: "desserts",
      });
      setProducts(updatedProducts);
    }
  };

  const handleEditSubcategoryIndex = (index) => {
    setActiveSubcategoryIndex(index);
    const selectedSubcategory = subcategories[index];
    if (selectedSubcategory && selectedSubcategory.subcategories) {
      setProducts(selectedSubcategory.subcategories);
    }
  };

  useEffect(() => {
    setNavItem(NavigationMenu);
    const updatedProducts = addImgData({
      data: dessertData,
      title: "desserts",
    });
    setProducts(updatedProducts);
  }, []);

  return (
    <div className={st.containerMenu}>
      <div className={st.menuNav}>
        {navItem.map((item, index) => (
          <MenuNav
            editNavIndex={handleEditNavIndex}
            title={item.title}
            id={item.id}
            index={index}
            key={index}
            activeIndex={activeNavIndex}
          />
        ))}
      </div>
      <div className={st.menuSubcategories}>
        {activeNavIndex === 1 && (
          <div className={st.subcategories}>
            {subcategories.map((subcategory, index) => (
              <button
                key={index}
                onClick={() => handleEditSubcategoryIndex(index)}
                className={
                  activeSubcategoryIndex === index ? st.activeSubcategory : ""
                }
              >
                {subcategory.title}
              </button>
            ))}
          </div>
        )}
        {activeNavIndex === 2 && (
          <div className={st.subcategories}>
            {subcategories.map((subcategory, index) => (
              <button
                key={index}
                onClick={() => handleEditSubcategoryIndex(index)}
                className={
                  activeSubcategoryIndex === index ? st.activeSubcategory : ""
                }
              >
                {subcategory.title}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className={st.wrapperContainer}>
        <Card products={products} onAddToCart={onAddToCart} />
      </div>
    </div>
  );
}
