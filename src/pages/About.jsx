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
              🌸 Мы - команда истинных ценителей красоты, предлагаем вам
              открывать для себя лучшую корейскую и другую премиальную
              косметику, созданную с любовью к вашей коже.
            </p>
            <p>
              🌺 Наша миссия - делать вашу кожу сияющей, здоровой и ухоженной,
              обеспечивая доступ к самым лучшим продуктам для ухода.{" "}
            </p>
            <p>
              💖В нашем ассортименте вы найдете широкий выбор уникальных
              средств, разработанных с использованием передовых технологий и
              натуральных ингредиентов, чтобы подчеркнуть вашу естественную
              красоту.{" "}
            </p>
            <p>
              🌿 Мы бережно подходим к выбору брендов, предлагаем только
              сертифицированную продукцию высочайшего качества, соответствующую
              самым высоким стандартам безопасности.{" "}
            </p>
            <p>
              💌 PELLEREALE - ваш надежный партнер в уходе за кожей. Доверьте
              нам заботу о вашей красоте, и вы почувствуете разницу!{" "}
            </p>
            <p>
              ✨ Давайте вместе создадим идеальный уход для вашей кожи! С
              любовью, Команда PELLEREALE
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
