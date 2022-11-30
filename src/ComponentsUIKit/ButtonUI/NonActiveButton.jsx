import React from "react";
import "./index.scss";

const NonActiveButton = () => {
  return (
    <div className="section__button__item">
      <span class="p_14 gray">Неактивна</span>
      <button className="button-ui non-active-btn">Отправить</button>
    </div>
  );
};

export default NonActiveButton;
