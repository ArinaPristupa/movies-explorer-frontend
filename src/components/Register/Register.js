import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <div className="login">
      <h2 className="login__title">
        Регистрация
      </h2>
      <form className="login__form">
        <input
          type="email"
          name="email"
          id="user-email"
          placeholder="Email"
          className="login__text login__text_type_title color"
          required
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Пароль"
          className="login__text login__text_type_title color"
          required
        />
        <button type="submit" className="login__button">Зарегистрироваться</button>
      </form>

      <p className="login__signin">
        Уже зарегистрированы?{' '}
        <Link
          to="/sign-in"
          className="login__link"
        >
          Войти
        </Link>
      </p>
    </div>
  );
}

export default Register;