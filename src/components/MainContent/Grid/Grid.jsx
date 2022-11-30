import React from "react";
import "./index.scss";

const Grid = () => {
  return (
    <section className="section__grid">
      <a href="#!" name="Grid">
        <h2 className="h2-sm">Сетка</h2>
      </a>
      <p className="p_16 description__text">
        Задание предполагает адаптивную вёрстку. Используется 3 состояния
        в зависимости от устройства. Сетка «резиновая» — переменной ширины.
      </p>
      <p className="p_lead p-sm-lead">Десктоп (1200+)</p>
      <div className="indications__grid">
        <div className="indications__grid__item">
          <p className="p_14">Контент</p>
          <p className="p_lead p-sm-lead">1072–1312</p>
        </div>
        <div className="indications__grid__item">
          <p className="p_14">Колонок</p>
          <p className="p_lead p-sm-lead">12</p>
        </div>
        <div className="indications__grid__item">
          <p className="p_14">Ширина колонки</p>
          <p className="p_lead p-sm-lead">60-80</p>
        </div>
        <div className="indications__grid__item">
          <p className="p_14">Межколонник</p>
          <p className="p_lead p-sm-lead">32</p>
        </div>
      </div>
      <div className="main-content__image-desctop"></div>

      <p className="p_lead p-sm-lead">Планшет (736+)</p>
      <div className="indications__grid">
        <div className="indications__grid__item">
          <p className="p_14">Контент</p>
          <p className="p_lead p-sm-lead">672–928</p>
        </div>
        <div className="indications__grid__item">
          <p className="p_14">Колонок</p>
          <p className="p_lead p-sm-lead">8</p>
        </div>
        <div className="indications__grid__item">
          <p className="p_14">Ширина колонки</p>
          <p className="p_lead p-sm-lead">56-88</p>
        </div>
        <div className="indications__grid__item">
          <p className="p_14">Межколонник</p>
          <p className="p_lead p-sm-lead">32</p>
        </div>
      </div>
      <div className="main-content__image-tab"></div>

      <p className="p_lead p-sm-lead">Телефон (320+)</p>
      <div className="indications__grid">
        <div className="indications__grid__item">
          <p className="p_14">Контент</p>
          <p className="p_lead p-sm-lead">296–424</p>
        </div>
        <div className="indications__grid__item">
          <p className="p_14">Колонок</p>
          <p className="p_lead p-sm-lead">4</p>
        </div>
        <div className="indications__grid__item">
          <p className="p_14">Ширина колонки</p>
          <p className="p_lead p-sm-lead">56-88</p>
        </div>
        <div className="indications__grid__item">
          <p className="p_14">Межколонник</p>
          <p className="p_lead p-sm-lead">24</p>
        </div>
      </div>
      <div className="main-content__image-phone"></div>
    </section>
  );
};

export default Grid;
