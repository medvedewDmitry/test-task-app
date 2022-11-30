import React from "react";
import ActiveButton from "../../../ComponentsUIKit/ButtonUI/ActiveButton";
import ButtonUI from "../../../ComponentsUIKit/ButtonUI/ButtonUI";
import HoverButton from "../../../ComponentsUIKit/ButtonUI/HoverButton";
import NonActiveButton from "../../../ComponentsUIKit/ButtonUI/NonActiveButton";

import "./index.scss";

const ButtonSection = () => {
  return (
    <section className="section__buttons">
      <h3>Кнопка</h3>
      <div className="buttons__block base__grid">
        <ButtonUI />
        <HoverButton />
        <ActiveButton />
        <NonActiveButton />
      </div>
    </section>
  );
};

export default ButtonSection;
