import "./About.css";

export default function About() {
  return (
    <section className="about__container">
      <div className="about__wrapper">
        <div className="about__text_block_left">
          {" "}
          <h3>Добро пожаловать в мир красоты с PELLEREALE!</h3>
          <br></br>
          <div className="about_text__lines">
            <p>
              Учебный центр Косметики Nanoasia рады Вас приветствовать интернет
              странице рады Вас видеть по адресу Санкт-Петербург ул. Лафонская,
              д. 6, 3 этаж гостиница Таврическая. Для Вас мы предлагаем
              приобрести косметику онлайн, всем нашим клиентам мы будем
              фиксировать индивидуальные скидки . Доставка товара любыли
              способами. В нашем центре можно получить консультацию от
              косметолога Екатерины и записаться процедуру. За консультацией
              косметики можно обратится по тел. +79219393978 Юлия
            </p>
          </div>
          <div className="image_right"></div>
        </div>
        <div className="about__text_block_right">
          <h2>Наши реквизиты:</h2>
          <div className="requisites_lines_block">
            <p>Расчётный счёт:</p>
            <p className="bolded">40802810120000371673</p>
          </div>
          <div className="requisites_lines_block gray__line">
            <p>Название банка:</p>
            <p className="bolded">ООО "Банк Точка"</p>
          </div>
          <div className="requisites_lines_block ">
            <p>БИК:</p>
            <p className="bolded">044525104</p>
          </div>
          <div className="requisites_lines_block gray__line">
            <p>Корреспондентский счёт: </p>
            <p className="bolded">30101810745374525104</p>
          </div>
          <div className="requisites_lines_block">
            <p>Наименование: </p>
            <p className="bolded">
              Индивидуальный предприниматель <br /> Щедрова Галина Витальевна
            </p>
          </div>
          <div className="requisites_lines_block gray__line">
            <p>ИНН: </p>
            <p className="bolded">840103425700</p>
          </div>
        </div>
      </div>
    </section>
  );
}
