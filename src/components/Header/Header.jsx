import { React, useState } from "react";
import "./Header.css";

import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import burgerMenu from "../../images/menuburger.svg";

import Navigation from "../Navigation/Navigation";

function Header({ isloggedIn }) {

  const [isClick, setIsClick] = useState(false);

  function handleOpenClick() {
    setIsClick(true);
  }

  function handleCloseClick() {
    setIsClick(false);
  }

  return (
    <>
      {!isloggedIn ? (
        <header className="header">
          <Link to="/" className="header__logo" type="button">
            <img src={logo} alt="Логотип проекта" />
          </Link>
          <nav className="header__link">
            <Link to="/signup" className="header__link-title" type="button">
              Регистрация
            </Link>
            <Link to="/signin" className="header__link-title header__link-title-green" type="button">
              Войти
            </Link>
          </nav>
        </header>
      ) : (<header className="header">
        <Link to="/" className="header__logo" type="button">
          <img src={logo} alt="Логотип проекта" />
        </Link>
        <div className="header__content">
          <Link to="/movies" className="header__button" type="button">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="header__button" type="button">
            Сохранённые фильмы
          </Link>
        </div>
        <nav className="header__nav">
          <Link
            to="/profile"
            className="header__button-account"
            type="button"
          >
            <p className="header__title">Аккаунт</p>
          </Link>
          <button
            type="button"
            className="header__menu-burger"
            onClick={handleOpenClick}
          >
            <img
              src={burgerMenu}
              className="header__menu-img"
              alt="меню альтернативное"
            />
          </button>
        </nav>
        {isClick ? <Navigation handleCloseClick={handleCloseClick} /> : ''}
      </header>
      )}
    </>
  );
}

export default Header;
