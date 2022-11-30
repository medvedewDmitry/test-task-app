import React from "react";
import "./index.scss";

const RadiobuttonUI = () => {
  return (
    <div className="radio-ui">
      <div className="radio__item">
        <input id="r1d" type="radio" name="radiod" value="1" />
        <label htmlFor="r1d">
          <p className="p_16 gray">Пластмассовый мир победил</p>
        </label>
      </div>

      <div className="radio__item">
        <input id="r2d" type="radio" name="radiod" value="2" />
        <label htmlFor="r2d">
          <p className="p_16 gray">Макет оказался сильней</p>
        </label>
      </div>

      <div className="radio__item">
        <input id="r3d" type="radio" name="radiod" value="3" />
        <label htmlFor="r3d">
          <p className="p_16 gray">Последний кораблик остыл</p>
        </label>
      </div>
    </div>
  );
};

export default RadiobuttonUI;
