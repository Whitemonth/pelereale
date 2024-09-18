import "./Checkout.css";
import { useContext } from "react";
import Context from "../Context";
import { GOODSDATA } from "../data";
import PhoneInput from "../components/PhoneInput/PhoneInput";

export default function Checkout() {
  const sendToTelegram = async (data) => {
    const token = "7395286921:AAE9Qw4NrhJx7cHCtgHoQBgPEAGGOeX1pLA";
    const chatId = "43504525";

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
    function generateOrderNumber() {
      const date = new Date();

      const month = String(date.getMonth() + 1).padStart(2, "0"); // Месяцы с 0
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      return `${month}${day}${hours}${minutes}`;
    }
    let data = [];
    let tempGoods = "";
    let time = new Date();
    let orderNumber = generateOrderNumber();
    document.getElementById("ord-nmbr").innerText = orderNumber;
    data.push(`Новый заказ №: ${orderNumber}.`);
    data.push(
      `Дата заказа ${time.toLocaleDateString()} ${time.toLocaleTimeString()}. Заказанные товары: `
    );
    tempGoods = value.cart.map(
      (e) =>
        `${GOODSDATA[e.good - 1].name} : ${e.counter} шт. x ${
          GOODSDATA[e.good - 1].price
        } руб.`
    );
    data.push(`${tempGoods}`);

    data.push(`Итоговая сумма заказа: ${value.cartSum} руб.`);
    data.push(`Тел. для связи: ${document.getElementById("phone").value}`);
    console.log(data.join(" "));

    sendToTelegram(data.join(" "));
    document.getElementById("pop-up").showModal();
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
      <dialog className="checkout_popup" id="pop-up">
        <div className="checkout_popup_hidden">
          <h3>Заказ успешно отправлен.</h3>
          <p>Номер Вашего заказа:</p>
          <h2 id="ord-nmbr">0</h2>
          <p>Наш менеджер свяжется с Вами в ближайшее время!</p>
          <button
            onClick={() => {
              document.getElementById("pop-up").close();
            }}
          >
            ОК
          </button>
        </div>
      </dialog>
    </section>
  );
}
