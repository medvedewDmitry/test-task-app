import React from "react";

const ErrorInputUI = () => {
  return (
    <div className="input-field">
      <span class="p_14 gray">Ошибка</span>
      <span className="form__error__title-block">E-mail</span>
      <input
        placeholder="E-mail"
        className="error-input feedback-form__input"
        type="email"
        value={"officemake.st"}
        readOnly
      />
      <span className="form__error ">Текст ошибки</span>
    </div>
  );
};

export default ErrorInputUI;
