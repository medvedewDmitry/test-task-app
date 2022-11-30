import React from "react";
import "./index.scss";

const BaseInputUI = () => {
  return (
    <div className="input-field">
     <span className="form__error__title">E-mail</span>
      <input
        placeholder="E-mail"
        className="base-input feedback-form__input"
        type="email"
      />
      <span className="form__error p_14">
        Текст ошибки
      </span>
    </div>
  );
};

export default BaseInputUI;
