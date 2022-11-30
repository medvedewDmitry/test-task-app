import React from "react";
import "./index.scss";

const IntroDescription = () => {
  return (
    <section className="main-content__description">
      <a href="#!" name="Description">
        <h1 className="h1-sm">Тестовое задание</h1>
      </a>
      <p className="p_lead p-sm-lead">Уровень: junior</p>
      <p className="description__text p_16">
        Привет! Твоё тестовое задание — грамотно заверстать эту прекрасную
        страничку. В шапке страницы укажи своё ФИО, так всем будет удобнее.
        В менюхе под иконкой бургером мы хотели бы также видеть твои данные. Ну
        что, поехали?
      </p>
    </section>
  );
};

export default IntroDescription;
