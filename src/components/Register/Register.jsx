import React from 'react';
import '../ElementForm/ElementForm.css';
import ElementForm from '../ElementForm/ElementForm';

function Register() {
  return (
    <ElementForm
      title='Добро пожаловать!' buttonText='Зарегистрироваться' sign='Уже зарегистрированы?' linkRouter='/signin' link='Войти'>
      <label className='form__label'>Имя
        <input
          type="text"
          name="name"
          id="user-name"
          placeholder="Арина"
          className="form__text"
          minLength='2'
          required
        />
        <span className='form__error'></span>
      </label>
      <label className='form__label'>E-mail
        <input
          type="email"
          name="email"
          id="user-email"
          placeholder="pochta@yandex.ru|"
          className="form__text form__text-blue"
          required
        />
        <span className='form__error'></span>
      </label>
      <label className='form__label'>Пароль
        <input
          type="password"
          name="password"
          id="password"
          className="form__text"
          required
        />
        <span className='form__error'></span>
      </label>
    </ElementForm>
  );
}

export default Register;