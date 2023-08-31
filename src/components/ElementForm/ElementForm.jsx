import React from 'react';
import './ElementForm.css';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function ElementForm({ title, children, buttonText, sign, linkRouter, link }) {
    return (
        <div className="form">
            <Link to='/' className="form__logo" type='button'>
                <img src={logo} alt="Логотип проекта" />
            </Link>
            <h2 className="form__title">
                {title}
            </h2>
            <form className="form__form">
                {children}
                <button type="submit" className="form__button">{buttonText}</button>
            </form>
            <p className="form__sign">
                {sign}
                <Link
                    to={linkRouter}
                    className="form__link"
                >
                    {link}
                </Link>
            </p>
        </div>
    )
}

export default ElementForm; 