import React, { useState, useEffect } from "react";
import st from "./Card.module.scss";

export default function Card({ products, onAddToCart }) {
  const [selectedVolumes, setSelectedVolumes] = useState({});
  const [selectedQuantities, setSelectedQuantities] = useState({});

  const handleVolumeChange = (id, volume, volumePrice) => {
    setSelectedVolumes((prevState) => ({
      ...prevState,
      [id]: { volume, volumePrice },
    }));
  };

  const incrementQuantity = (id) => {
    setSelectedQuantities((prevState) => ({
      ...prevState,
      [id]: (prevState[id] || 1) + 1,
    }));
  };

  const decrementQuantity = (id) => {
    setSelectedQuantities((prevState) => ({
      ...prevState,
      [id]: prevState[id] > 1 ? prevState[id] - 1 : 1,
    }));
  };

  useEffect(() => {
    const autoSelectVolumes = {};
    products.forEach(({ id, volumes }) => {
      if (volumes && volumes.length === 1) {
        autoSelectVolumes[id] = {
          volume: volumes[0].volume,
          volumePrice: volumes[0].price,
        };
      }
    });
    setSelectedVolumes(autoSelectVolumes);
  }, [products]);

  const handleAddToCart = (title, price, volume, quantity) => {
    const newItem = { title, price, volume, quantity };
    onAddToCart(newItem);
  };

  return (
    <div className={st.containerCardWrapper}>
      {products.map(({ title, price, id, volumes, images }) => {
        const selectedVolume = selectedVolumes[id];
        const selectedQuantity = selectedQuantities[id] || 1;

        const totalPrice = selectedVolume
          ? selectedVolume.volumePrice * selectedQuantity
          : price * selectedQuantity;

        return (
          <div className={st.containerCard} key={id}>
            <h3>{title}</h3>
            {images && (
              <img src={images} alt={title} className={st.productImage} />
            )}
            {volumes ? (
              <>
                <div className={st.volumeSelection}>
                  {volumes.map(({ volume, price: volumePrice }) => (
                    <div
                      key={volume}
                      className={`${st.volumeOption} ${
                        selectedVolume && selectedVolume.volume === volume
                          ? st.selected
                          : ""
                      }`}
                      onClick={() =>
                        handleVolumeChange(id, volume, volumePrice)
                      }
                    >
                      {volume}
                    </div>
                  ))}
                </div>
                {selectedVolume ? (
                  <p>Цена: {totalPrice} р.</p>
                ) : (
                  <p className={st.containerPrice}>Выберите объем</p>
                )}
              </>
            ) : (
              <p className={st.containerPrice}>Цена: {totalPrice} р.</p>
            )}

            <div className={st.quantityControls}>
              <button onClick={() => decrementQuantity(id)}>-</button>
              <span>{selectedQuantity}</span>
              <button onClick={() => incrementQuantity(id)}>+</button>
            </div>

            <button
              className={st.basket}
              onClick={() =>
                handleAddToCart(
                  title,
                  selectedVolume ? selectedVolume.volumePrice : price, // Передаем цену за единицу
                  selectedVolume ? selectedVolume.volume : null,
                  selectedQuantity
                )
              }
            >
              В корзину
            </button>
          </div>
        );
      })}
    </div>
  );
}
