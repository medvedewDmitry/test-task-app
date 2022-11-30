import React from "react";
import "./index.scss";

const DropdawnList = () => {
  const handleClick = (event) => {
    event.currentTarget.classList.toggle("active-btn");
  };
  return (
    <selectmenu className="select-ui">
      <div slot="button" behavior="button">
        <button
          className="select-btn"
          slot="selected-value"
          behavior="selected-value"
          onClick={handleClick}
        >
          Выберите пункт
        </button>
      </div>

      <option value="first-chair">Первый стул</option>
      <option value="second-chair">Второй стул</option>
      <option value="third-chair">Выбранный пункт</option>
      <option value="theory-eskobar">Теорема Эскобара</option>
    </selectmenu>
  );
};

export default DropdawnList;
