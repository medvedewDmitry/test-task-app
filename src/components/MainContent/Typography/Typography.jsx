import React from "react";
import "./index.scss";
import TabBar from "./TabBar";

const Typography = () => {
  return (
    <section className="main-content__typography">
      <a href="#!" name="Typography">
        <h2 className="h2-sm">Типографика</h2>
      </a>
      <p className="p_16 text__description">
        Используется шрифт Graphik. На телефонах стили типографики
        переопределяются
      </p>
      <TabBar />
    </section>
  );
};

export default Typography;
