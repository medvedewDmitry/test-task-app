import React from "react";
import Accordion from "./Accordion/Accordion";
import ButtonSection from "./ButtonSection/ButtonSection";
import CheckBox from "./CheckBox/CheckBox";

import Grid from "./Grid/Grid";
import IntroDescription from "./IntroDescription/IntroDescription";
import Typography from "./Typography/Typography";

const MainContent = () => {
  return (
    <section className="main-content col-lg-9 col-md-5 col-sm-4">
      <IntroDescription />
      <Grid />
      <Typography />
      <ButtonSection />
      <CheckBox />
      <Accordion />
    </section>
  );
};

export default MainContent;
