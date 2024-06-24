import { useState } from "react";

export default function useCart() {
  const [cart, setCart] = useState([]);
  let counter;
  const handleAddToCart = (id) => {
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

    counter = cart.length;
    console.log(counter);
    console.log(cart);
  };

  return { counter, handleAddToCart };
}
