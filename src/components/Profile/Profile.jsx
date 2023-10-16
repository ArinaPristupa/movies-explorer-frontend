import React from 'react';
import './Profile.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import useValidation from '../../hooks/useValidation';

function Profile({ onUpdateUser, exit, isLoading }) {

  const { handleChange, resetForm, errorsValidation, isFormValidation, valuesValidation } = useValidation();

  const currentUser = React.useContext(CurrentUserContext);

  const [isValue, setIsValue] = React.useState(false);

  React.useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name: valuesValidation.name, email: valuesValidation.email,
    });
  }

  React.useEffect(() => {

    if (
      currentUser.name === valuesValidation.name &&
      currentUser.email === valuesValidation.email
    ) {
      setIsValue(true);
    }
    else {
      setIsValue(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valuesValidation]);

  return (
    <>
      <main className="profile">
        <h2 className="profile__title">
          {`Привет, ${currentUser.name}!`}
        </h2>
        <form id='form' onSubmit={handleSubmit} className="profile__form" noValidate>

          <label className='profile__label'>Имя

            <input
              type="text"
              name="name"
              id="user-name"
              className="profile__text"
              minLength='2'
              maxLength='30'
              required
              onChange={handleChange}
              value={valuesValidation.name || ''}
            // placeholder="Ваше имя"
            />
            <span className='profile__form-error'>{errorsValidation.name}</span>
          </label>

          <div className='profile__line'></div>

          <label className='profile__label'>E-mail
            <span className='profile__form-error'>{errorsValidation.email}</span>
            <input
              type="email"
              name="email"
              id="user-email"
              className="profile__text"
              required
              minLength='2'
              maxLength='30'
              onChange={handleChange}
              value={valuesValidation.email || ''}
              pattern={'[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.[a-z]{2,}'}
            // placeholder="Ваш email"
            />
          </label>
          <button type="submit" disabled={!isFormValidation ? true : false}
            className={!isFormValidation || isLoading || isValue ? "profile__button-save profile__button-save_active" : "profile__button-save"}>Редактировать</button>
          <button type='button' onClick={exit} className='profile__button-exit'>Выйти из аккаунта</button>
        </form>
      </main>
    </>
  )
}

export default Profile;