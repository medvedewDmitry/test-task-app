import React from "react";
import DropdawnList from "../../../ComponentsUIKit/DropdawnList/DropdawnList";
import "./index.scss";

const Dropdawn = () => {
  return (
    <section className="section__dropdawn-list">
      <h3>Выпадающий список</h3>
      <p className="p_16 text__description">
        Компонент состоит из текстового поля и выпадающей подсказки
      </p>
      <div className="dropdawn-list__block base__grid">
        <DropdawnList />
        <DropdawnList />
        <DropdawnList />
      </div>
    </section>
  );
};

export default Dropdawn;
