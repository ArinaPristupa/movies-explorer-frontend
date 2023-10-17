import React from 'react';
import '../ElementForm/ElementForm.css';
import ElementForm from '../ElementForm/ElementForm';

import useValidation from '../../hooks/useValidation';

function Register({ handleRegister, isLoading }) {

  const { handleChange, errorsValidation, isFormValidation, valuesValidation } = useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({ name: valuesValidation.name, email: valuesValidation.email, password: valuesValidation.password });
  }

  return (
    <ElementForm
      title='Добро пожаловать!' buttonText='Зарегистрироваться' sign='Уже зарегистрированы?' linkRouter='/signin' link='Войти' onSubmit={handleSubmit} isLoading={isLoading} isDisabled={!isFormValidation || isLoading}>
      <label className='form__label'>Имя
        <input
          type="text"
          name="name"
          id="user-name"
          className="form__text"
          minLength='2'
          maxLength='30'
          required
          onChange={handleChange}
          value={valuesValidation.name || ''}
        />
        <span className='form__error'>{errorsValidation.name}</span>
      </label>
      <label className='form__label'>E-mail
        <input
          type="email"
          name="email"
          id="user-email"
          className="form__text"
          required
          onChange={handleChange}
          value={valuesValidation.email || ''}
          pattern={'[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}'}
        />
        <span className='form__error'>{errorsValidation.email}</span>
      </label>
      <label className='form__label'>Пароль
        <input
          type="password"
          name="password"
          id="password"
          className="form__text"
          required
          onChange={handleChange}
          value={valuesValidation.password || ''}
          minLength='8'
        />
        <span className='form__error'>{errorsValidation.password}</span>
      </label>
    </ElementForm>
  );
}

export default Register;