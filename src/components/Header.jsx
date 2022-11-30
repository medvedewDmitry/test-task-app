import React from "react";
import HeaderLogo from "../ComponentsUIKit/HeaderLogo/HeaderLogo";
import MenuButton from "../ComponentsUIKit/MenuButton/MenuButton";

const Header = () => {
  return (
    <header className="header col-lg-12 col-md-8 col-sm-4">
      <div className="header__heading-logo col-lg-11 col-md-8">
        <HeaderLogo />
        <p className="p_14 gray col-sm-2">
          <span>Медведев</span>
          <br />
          Дмитрий Александрович
        </p>
      </div>
      <MenuButton />
    </header>
  );
};

export default Header;
