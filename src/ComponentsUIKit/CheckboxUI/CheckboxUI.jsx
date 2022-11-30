import React from "react";
import "./index.scss";

const CheckboxUI = () => {
  return (
    <div className="checkbox-ui">
      <div className="checkbox__item">
        <input type="checkbox" id="cb1" />
        <label htmlFor="cb1">
          <p className="p_16 gray">Выбери меня</p>
        </label>
      </div>

      <div className="checkbox__item">
        <input type="checkbox" id="cb2" />
        <label htmlFor="cb2">
          <p className="p_16 gray">Выбери меня</p>
        </label>
      </div>

      <div className="checkbox__item">
        <input type="checkbox" id="cb3" />
        <label htmlFor="cb3">
          <p className="p_16 gray">Птица счастья завтрашнего дня</p>
        </label>
      </div>
    </div>
  );
};

export default CheckboxUI;
