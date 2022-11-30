import React from "react";
import "./index.scss";

const HoverInputUI = () => {
  return (
    <div className="input-field">
      <span class="p_14 gray">Ховер</span>
      <input
        title="Ховер"
        placeholder="E-mail"
        className="hover-input feedback-form__input"
        type="email"
        readOnly
      />
      <span className="form__error p_14">
        Введите e-mail в формате example@site.com
      </span>
    </div>
  );
};

export default HoverInputUI;
