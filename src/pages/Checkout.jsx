import "./Checkout.css";
import { useContext } from "react";
import Context from "../Context";
import { GOODSDATA } from "../data";
import PhoneInput from "../components/PhoneInput/PhoneInput";

export default function Checkout() {
  const sendToTelegram = async (data) => {
    const token = "7395286921:AAE9Qw4NrhJx7cHCtgHoQBgPEAGGOeX1pLA"; // Ваш токен
    const chatId = "YOUR_CHANNEL_CHAT_ID"; // Замените на ID вашего канала

    const message = data; // Текст сообщения, который нужно отправить

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message, // Используем текст из переменной data
          parse_mode: "HTML", // Или 'Markdown', в зависимости от формата
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Ошибка при отправке сообщения: ${response.statusText}`
        );
      }

      const result = await response.json();
      console.log("Сообщение отправлено:", result);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  function sendDataToBot() {
    let data = "";
    data = value.cart.map(
      (e) =>
        `${GOODSDATA[e.good - 1].name} : ${e.counter} шт. x ${
          GOODSDATA[e.good - 1].price
        } руб.`
    );
    data.push(`Итоговая сумма заказа: ${value.cartSum} руб.`);
    data.push(`Тел. для свяи: ${document.getElementById("phone").value}`);
    console.log(data.join(" "));
    sendToTelegram(data);
  }

  function sendCheckout() {
    let phoneArr = document.getElementById("phone").value.split("");
    let truePhone = phoneArr.filter((item) => item >= 0 && item <= 9);
    if (truePhone.length < 12) {
      document.getElementById("phone").style.backgroundColor = "coral";

      document.getElementById("phonecheckalert").style.visibility = "visible";
      setTimeout(() => {
        document.getElementById("phone").style.backgroundColor = "white";
      }, 1000);
    } else {
      document.getElementById("phonecheckalert").style.visibility = "hidden";
      sendDataToBot();
    }
  }
  const value = useContext(Context);

  const sumCounts = (cart) => {
    let sum = 0;
    for (let item of cart) {
      sum += item.counter;
    }
    return sum;
  };

  return (
    <section className="checkout__section">
      <h3>Оформление</h3>
      <div className="checkout__window">
        {value.cart.map((e) => (
          <div key={GOODSDATA[e.good - 1].id} className="check__good_line">
            <div className="checkout_good_title">
              <p>{GOODSDATA[e.good - 1].name}. </p>
            </div>
            <p className="checkout__counter">{e.counter} шт.</p>
            <p className="checkout__price">
              {GOODSDATA[e.good - 1].price * e.counter} руб.
            </p>
          </div>
        ))}
        <div className="checkout__total">
          <p className="checkout_good_title">Итого: </p>
          <p className="checkout__counter">{sumCounts(value.cart)} шт.</p>
          <p className="checkout_total_price">{value.cartSum} руб.</p>
        </div>
        <div className="checkout__phone_block">
          <div>
            <p>Для подтверждения заказа, укажите телефон для связи: </p>
            <PhoneInput />
            <p className="hidden_phonecheck" id="phonecheckalert">
              Проверьте правильность ввода номера!
            </p>
          </div>
          <button
            onClick={() => {
              sendCheckout();
            }}
          >
            Подтвердить заказ
          </button>
        </div>
      </div>
    </section>
  );
}
