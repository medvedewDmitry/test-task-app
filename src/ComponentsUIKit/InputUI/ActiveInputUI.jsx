import React from "react";

const ActiveInputUI = () => {
  return (
    <div className="input-field">
      <span class="p_14 gray">Ввод</span>
      <input
        placeholder="E-mail"
        className="active-input feedback-form__input"
        type="email"
        value={"officemake.st"}
        readOnly
      />
      <span className="form__error p_14">
        Введите e-mail в формате example@site.com
      </span>
    </div>
  );
};

export default ActiveInputUI;
