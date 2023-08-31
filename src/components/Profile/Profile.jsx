import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <main className="profile">
      <h2 className="profile__title">
        Привет, Арина!
      </h2>
      <form className="profile__form">
        <label className='profile__label'>Имя
          <input
            type="text"
            name="name"
            id="user-name"
            placeholder="Арина"
            className="profile__text"
            minLength='2'
            required
          />
        </label>
        <div className='profile__line'></div>
        <label className='profile__label'>E-mail
          <input
            type="email"
            name="email"
            id="user-email"
            placeholder="pochta@yandex.ru"
            className="profile__text"
            required
          />
        </label>
        <button className='profile__button-save'>Редактировать</button>
        <Link to='/' className='profile__button-exit'>Выйти из аккаунта</Link>
      </form>
    </main>
  )
}

export default Profile; 