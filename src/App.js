import "./App.css";
import { Routes, Route } from "react-router-dom";
import Goods from "./pages/Goods";
import About from "./pages/About";
import Header from "./components/Header/Header";
import Context from "./Context";
import { useState, useEffect } from "react";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]); // state для корзины

  // Используем useEffect для загрузки корзины из localStorage при загрузке компонента
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Используем useEffect для сохранения корзины в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (id) => {
    // хэндлер для добавления товаров в корзину
    const updatedCart = [...cart]; // Создаем копию массива cart
    // Проверяем, есть ли в корзине товар с заданным id
    const itemIndex = updatedCart.findIndex((item) => item.good === id);
    if (itemIndex !== -1) {
      // Если товар найден
      updatedCart[itemIndex].counter++; // Увеличиваем counter на 1
    } else {
      updatedCart.push({ good: id, counter: 1 }); // Добавляем новый товар
    }
    setCart(updatedCart); // Обновляем состояние корзины
  };
  const clearCart = (id) => {
    setCart([]);
  };
  const value = { cart, handleAddToCart, clearCart }; // помещаем переменную cart и функцию добавления товара в value провайдера useContext

  return (
    <Context.Provider value={value}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/goods" element={<Goods />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
