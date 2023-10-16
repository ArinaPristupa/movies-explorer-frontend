import React from 'react';
import '../ElementForm/ElementForm.css';
import ElementForm from '../ElementForm/ElementForm';

import useValidation from '../../hooks/useValidation';

function Login({ handleLogin, isLoading }) {

  const { handleChange, errorsValidation, isFormValidation, valuesValidation } = useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email: valuesValidation.email, password: valuesValidation.password });
  }

  return (
    <ElementForm
      title='Рады видеть!' buttonText='Войти' sign='Ещё не зарегистрированы?' linkRouter='/signup' link='Регистрация' onSubmit={handleSubmit} isLoading={isLoading} isDisabled={!isFormValidation}>
      <label className='form__label'>E-mail
        <input
          type="email"
          name="email"
          id="user-email"
          className="form__text"
          required
          minLength='2'
          maxLength='30'
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
          minLength='8'
          maxLength='30'
          onChange={handleChange}
          value={valuesValidation.password || ''}
        />
        <span className='form__error'>{errorsValidation.password}</span>
      </label>
    </ElementForm>
  )
}

export default Login; 