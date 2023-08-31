import React from 'react';
import '../ElementForm/ElementForm.css';
import ElementForm from '../ElementForm/ElementForm';

function Login() {
  return (
    <ElementForm
      title='Рады видеть!' buttonText='Войти' sign='Ещё не зарегистрированы?' linkRouter='/signup' link='Регистрация'>
      <label className='form__label'>E-mail
        <input
          type="email"
          name="email"
          id="user-email"
          placeholder="pochta@yandex.ru|"
          className="form__text"
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
  )
}

export default Login; 