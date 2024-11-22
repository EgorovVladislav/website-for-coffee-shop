import React, { useState, useEffect } from "react";
import st from "./Modal.module.scss";

export default function Modal({
  closeModal,
  items,
  onRemoveItem,
  onUpdateQuantity,
}) {
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const initialQuantities = items.reduce((acc, item) => {
      acc[item.title] = item.quantity || 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [items]);

  const incrementQuantity = (title) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [title]: prevQuantities[title] + 1,
    }));
  };

  const decrementQuantity = (title) => {
    setQuantities((prevQuantities) => {
      const newQuantity = prevQuantities[title] - 1;
      return {
        ...prevQuantities,
        [title]: newQuantity > 0 ? newQuantity : 1,
      };
    });
  };

  const handleRemoveItem = (title) => {
    onRemoveItem(title);
  };

  const handleClose = () => {
    // Передаем обновленные количества в родительский компонент
    items.forEach((item) => {
      const newQuantity = quantities[item.title] || 1;
      onUpdateQuantity(item.title, newQuantity);
    });
    closeModal();
  };

  const totalPrice = Object.keys(quantities).reduce((total, title) => {
    const item = items.find((item) => item.title === title);
    return total + (item ? item.price * quantities[title] : 0);
  }, 0);

  return (
    <div className={st.containerModal}>
      <div className={st.modalContent}>
        <button onClick={handleClose} className={st.closeButton}>
          Закрыть
        </button>
        <h2>Корзина</h2>
        {items.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <>
            <div className={st.containerBasket}>
              {Object.keys(quantities).map((title) => {
                const item = items.find((item) => item.title === title);
                if (!item) return null;
                const itemTotalPrice = item.price * quantities[title];
                return (
                  <div key={title} className={st.containerLi}>
                    <p>
                      {item.title} {item.volume} - {item.price} р. (Итого:
                      {itemTotalPrice} р.)
                    </p>
                    <div className={st.quantityControls}>
                      <button
                        className={st.count}
                        onClick={() => decrementQuantity(title)}
                      >
                        -
                      </button>
                      <p>{quantities[title]} шт.</p>
                      <button
                        className={st.count}
                        onClick={() => incrementQuantity(title)}
                      >
                        +
                      </button>
                      <button
                        className={st.deleteBtn}
                        onClick={() => handleRemoveItem(title)}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <h3>Итоговая стоимость: {totalPrice} р.</h3>
            <button>Оформить заказ</button>
          </>
        )}
      </div>
    </div>
  );
}
