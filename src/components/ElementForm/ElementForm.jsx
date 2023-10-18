import './ElementForm.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function ElementForm({ title, children, buttonText, sign, linkRouter, link, isLoading, isDisabled, onSubmit }) {
  return (
    <div className="form">
      <Link to='/' className="form__logo" type='button'>
        <img src={logo} alt="Логотип проекта" />
      </Link>
      <h2 className="form__title">{title}</h2>
      <form onSubmit={onSubmit} className="form__form" noValidate>
        {children}
        <button
          type="submit"
          disabled={isLoading || isDisabled}
          className={isLoading || isDisabled ? "form__button form__button_active" : "form__button"}> {isLoading ? "Загрузка..." : buttonText}</button>
      </form>
      <p className="form__sign">
        {sign}
        <Link to={linkRouter} className="form__link">{link}</Link>
      </p>
    </div>
  );
}

export default ElementForm;