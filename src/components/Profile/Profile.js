import React from 'react';
import './Profile.css';

function Profile() {
  return (
    <div className="login">
      <h2 className="login__title">
        Вход
      </h2>
      <form  className="login__form">
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
        <button type="submit" className="login__button">Редактировать</button>
      </form>
    </div>
  )
}

export default Profile; 