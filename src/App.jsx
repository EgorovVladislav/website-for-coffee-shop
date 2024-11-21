import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Reviews from "./pages/Reviews/Reviews";
import Modal from "./pages/Modal/Modal";
import st from "./App.module.scss";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) =>
          cartItem.title === item.title && cartItem.volume === item.volume
      );
      if (existingItem) {
        // Если товар уже есть, увеличиваем количество
        return prevItems.map((cartItem) =>
          cartItem.title === item.title && cartItem.volume === item.volume
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      }
      // Если товара нет, добавляем новый
      return [...prevItems, item];
    });
  };

  const handleRemoveItem = (title) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    );
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );
  const handleUpdateQuantity = (title, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.title === title ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  return (
    <Router>
      <div className={st.appContainer}>
        <Header openModal={toggleModal} totalItems={totalItems} />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route
              path="menu"
              element={<Menu onAddToCart={handleAddToCart} />}
            />
            <Route path="about" element={<About />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
        {isModalOpen && (
          <Modal
            closeModal={toggleModal}
            items={cartItems}
            onRemoveItem={handleRemoveItem}
            onUpdateQuantity={handleUpdateQuantity}
          />
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
