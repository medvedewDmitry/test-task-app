import React from "react";
import { useState } from "react";

/** 
 * Описание функции TabBar()
 * 
 * @param {number} index - индекс переключаемого таба
 * @description Содержит функцию toggleTab, котрая изменяет состояние toggleState посредством setToggleState, передавая текущий index.

 * Функция срабатывает при приотслеживании клика пользователя на кнопку, где передается  @param {number} index. 
 * Кнопке присваивается className путем сравнения текущего состояния toggleState с @param {number} index. 
 **/

function TabBar() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tab-bar">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Декстоп
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Телефон
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <p className="p_14 second-color">Заголовок H1, 48/56, bold</p>
          <h1>Текст заголовка</h1>
          <p className="p_14 second-color">Заголовок H2, 32/40, bold</p>
          <h2>Текст заголовка</h2>
          <p className="p_14 second-color">Заголовок H3, 24/32, medium</p>
          <h3>Текст заголовка</h3>
          <p className="p_14 second-color">Заголовок H4, 18/28, medium</p>
          <h4>Текст заголовка</h4>
          <p className="p_14 second-color">Лид P_Lead, 24/32, regular</p>
          <p className="p_lead">Текст лида</p>
          <p className="p_14 second-color">
            Крупный текст P_18, 18/28, regular
          </p>
          <p className="p_18">Крупный текст</p>
          <p className="p_14 second-color">
            Основной текст P_16, 16/24, regular
          </p>
          <p className="p_16">Основной текст</p>
          <p className="p_14 second-color">
            Впомогательный текст P_14, 14/20, regular
          </p>
          <p className="p_14">Вспомогательный текст</p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p className="p_14 second-color">Заголовок H1, 32/40, bold</p>
          <h1 className="h1-sm-tab">Текст заголовка</h1>
          <p className="p_14 second-color">Заголовок H2, 28/36, bold</p>
          <h2 className="h2-sm-tab">Текст заголовка</h2>
          <p className="p_14 second-color">Заголовок H3, 20/28, medium</p>
          <h3 className="h3-sm-tab">Текст заголовка</h3>
          <p className="p_14 second-color">Заголовок H4, 18/28, medium</p>
          <h4>Текст заголовка</h4>
          <p className="p_14 second-color">Лид P_Lead, 20/28, regular</p>
          <p className="p-sm-tab-lead">Текст лида</p>
          <p className="p_14 second-color">
            Крупный текст P_18, 18/28, regular
          </p>
          <p className="p_18">Крупный текст</p>
          <p className="p_14 second-color">
            Основной текст P_16, 16/24, regular
          </p>
          <p className="p_16">Основной текст</p>
          <p className="p_14 second-color">
            Впомогательный текст P_14, 14/20, regular
          </p>
          <p className="p_14">Вспомогательный текст</p>
        </div>
      </div>
    </div>
  );
}

export default TabBar;
