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
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItem = (title) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.title !== title)
    );
  };
  return (
    <Router>
      <div className={st.appContainer}>
        <Header openModal={toggleModal} />
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
          />
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
