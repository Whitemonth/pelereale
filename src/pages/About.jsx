import "./About.css";

export default function About() {
  return (
    <section className="about__container">
      <div className="about__wrapper">
        <div className="about__text_block_left">
          {" "}
          <h2 className="centered_h3">
            Добро пожаловать в Учебный центр Косметики Nanoasia
          </h2>
          <div className="about_text__lines">
            <p>
              Рады Вас видеть в нашем магазине по адресу: Санкт-Петербург ул.
              Лафонская, д. 6, 3 этаж, гостиница Таврическая.
            </p>
            <p>
              Мы предлагаем приобрести косметику онлайн. Всем нашим клиентам мы
              будем фиксировать индивидуальные скидки . Доставка товара
              осуществляется любыми удобными для Вас способами.
            </p>
            <p>
              В нашем центре можно получить консультацию от косметолога
              Екатерины и записаться процедуру. За консультацией косметики можно
              обратится по тел. <a href="tel:+79219393978">+7(921)939-39-78</a>
              &nbsp; Юлия
            </p>
            <div>
              <iframe
                title="yandexmap"
                className="about_map_container"
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aff48b3eece0c910e5da38ee6b5538bc0bc5b338c642eeda139032516fa4cce2c&amp;source=constructor"
                width="595"
                height="379"
                frameborder="0"
              ></iframe>
            </div>
          </div>
          <div className="image_right"></div>
        </div>
        <div className="about__text_block_right">
          <h2 className="centered_h3">Наши реквизиты:</h2>
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
            <p className="leftanchor">Корреспондентский счёт: </p>
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
