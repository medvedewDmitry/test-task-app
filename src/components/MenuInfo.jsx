import React from "react";

const MenuInfo = () => {
  return (
    <div className="menu__body">
      <div className="container">
        <div className="row">
          <div className="menu__body__info">
            <h2>
              Медведев
              <br />
              Дмитрий Александрович
            </h2>
            <p className="p_16 info__description">
              Фриланс-разработчик. Специализируюсь на React. <br />
              Стек технологий: HTML, CSS (в том числе препроцессоры), Native JS
              + React.
            </p>
            <h4 className="p_18 info__phone">
              <a href="tel:+79133027996">+7(913)-302-79-96</a>
            </h4>

            <div className="info__social__block">
              <a
                className="info__social__link"
                href="https://t.me/medvedew_dmitry"
                target={"_blank"}
                rel="noreferrer"
              >
                <button className="social__btn"></button>
                <p className="p_16">Ссылка на telegram</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuInfo;
