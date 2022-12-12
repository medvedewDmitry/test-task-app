import React from "react";
import "./index.scss";

const IntroDescription = () => {
  return (
    <section className="main-content__description">
      <a href="#!" name="Description">
        <h1 className="h1-sm">Тестовое задание</h1>
      </a>
      <p className="description__text p_16">
       Описание тестового задания для разработчика
      </p>
    </section>
  );
};

export default IntroDescription;
