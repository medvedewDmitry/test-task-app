import React from "react";
import "./index.scss";

/** 
 * Описание отслеживания события onClick на кнопке бокового меню
 * 
 * @constant body - тело страницы
 * @constant menuInfo - компонент menuInfo
 * @description В компоненте menuInfo проверяем наличие класса active-menu.
 * Посредством метода toggle добавляем, если он отсутствует и убираем, если имеется.
 * 
 * Убираем скролл страницы в зависимости открыто ли меню путем добавления класса disactive-scroll в body
 * **/

const MenuButton = () => {
  return (
    <button
      className="menu__button"
      onClick={() => {
        const body = document.body;
        const menuInfo = document.querySelector(".menu__body");

        menuInfo.classList.toggle("active-menu");
        body.classList.toggle("disactive-scroll");
      }}
    >
      <svg
        className="btn__close"
        width="32"
        height="30"
        viewBox="0 0 36 36"
        fillRule="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 15.2308L33.2308 0L36 2.76923L20.7692 18L36 33.2308L33.2308 36L18 20.7692L2.76923 36L0 33.2308L15.2308 18L0 2.76923L2.76923 0L18 15.2308Z"
          fillRule="#ffffff"
        ></path>
      </svg>
      <span />
    </button>
  );
};

export default MenuButton;
