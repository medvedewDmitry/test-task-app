import React from "react";
import CheckboxUI from "../../../ComponentsUIKit/CheckboxUI/CheckboxUI";
import RadiobuttonUI from "../../../ComponentsUIKit/RadiobuttonUI/RadiobuttonUI";

import "./index.scss";

const CheckBox = () => {
  return (
    <section className="section__checkbox">
      <h3>Чекбокс, радиобаттон</h3>
      <div className="checkbox__block base__grid_2bl">
        <CheckboxUI />
        <RadiobuttonUI />
      </div>
    </section>
  );
};

export default CheckBox;
