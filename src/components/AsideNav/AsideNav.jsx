import React from "react";
import "./index.scss";

const AsideNav = () => {
  return (
    <section className="aside__nav col-lg-3 col-md-3">
      <nav className="aside__nav__menu">
        <ul className="nav__menu__list">
          <li className="nav__menu__item">
            <a href="#Description" className="nav__menu__link active-link">
              Напутственное слово
            </a>
          </li>
          <li className="nav__menu__item">
            <a href="#Grid" className="nav__menu__link hover-link">
              Сетка
            </a>
          </li>
          <li className="nav__menu__item">
            <a href="#Typography" className="nav__menu__link">
              Типографика
            </a>
          </li>
          <li className="nav__menu__item">
            <a href="#UI" className="nav__menu__link">
              UI
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default AsideNav;
