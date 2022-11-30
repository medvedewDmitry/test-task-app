import React from "react";
import ActiveInputUI from "../../../ComponentsUIKit/InputUI/ActiveInputUI";
import BaseInputUI from "../../../ComponentsUIKit/InputUI/BaseInputUI";
import ErrorInputUI from "../../../ComponentsUIKit/InputUI/ErrorInputUI";
import HoverInputUI from "../../../ComponentsUIKit/InputUI/HoverInputUI";

import "./index.scss";

const UI = () => {
  return (
    <section className="section__UI">
      <a href="#!" name="UI">
        <h2>UI</h2>
      </a>
      <h3>Текстовое поле</h3>
      <div className="input__block base__grid">
        <BaseInputUI />
        <HoverInputUI />
        <ActiveInputUI />
        <ErrorInputUI />
      </div>
    </section>
  );
};

export default UI;
