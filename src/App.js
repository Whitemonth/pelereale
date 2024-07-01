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
  const [cartSum, setCartSum] = useState(0); // state для суммы товаров

  // Используем useEffect для загрузки корзины из localStorage при загрузке компонента
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Используем useEffect для загрузки суммы из localStorage при загрузке компонента
  useEffect(() => {
    const savedSum = localStorage.getItem("sum");
    if (savedSum) {
      setCartSum(JSON.parse(savedSum));
    }
  }, []);

  // Используем useEffect для сохранения корзины в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Используем useEffect для сохранения суммы товаров в localStorage при изменении
  useEffect(() => {
    localStorage.setItem("sum", JSON.stringify(cartSum));
  }, [cartSum]);

  // хэндлер для добавления товаров в корзину
  const handleAddToCart = (id, price) => {
    setCartSum((prev) => prev + price);

    // Создаем копию массива cart
    const updatedCart = [...cart];

    // Проверяем, есть ли в корзине товар с заданным id
    const itemIndex = updatedCart.findIndex((item) => item.good === id);
    if (itemIndex !== -1) {
      // Если товар найден:
      // Увеличиваем counter на 1
      updatedCart[itemIndex].counter++;
    } else {
      // Создаем в корзине новый товар
      updatedCart.push({ good: id, counter: 1 });
    }
    // Обновляем состояние корзины
    setCart(updatedCart);
  };

  // хэндлер для удаления товаров из корзины
  const handleRemoveFromCart = (id, price) => {
    setCartSum((prev) => prev - price);

    // Создаем копию массива cart
    let updatedCart = [...cart];

    // Проверяем, есть ли в корзине товар с заданным id
    const itemIndex = updatedCart.findIndex((item) => item.good === id);
    // Если товар найден
    // Уменьшаем counter на 1
    if (itemIndex !== -1) {
      updatedCart[itemIndex].counter--;
    }
    // Если счетчик равен нулю - удаляем товар из корзины
    if (updatedCart[itemIndex].counter === 0) {
      updatedCart = updatedCart.filter((item) => item.good !== id);
    }

    // Обновляем состояние корзины
    setCart(updatedCart);
  };

  const clearCart = (id) => {
    // Удаление всех товаров из корзины
    setCart([]);
    setCartSum(0);
  };

  const value = {
    cart,
    cartSum,
    handleAddToCart,
    handleRemoveFromCart,
    clearCart,
  }; // помещаем переменную cart и функции добавления/удаления товаров в value провайдера useContext

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
