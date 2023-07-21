import React from 'react';
import './Header.css';

import { Link } from "react-router-dom";
import logo from '../images/logo_mesto.svg'

function Header({ title, onClick, email, route }) {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="Логотип проекта" />
            <nav className='header__menu'>
                <p className='header__email'>{email}</p>
                <Link className='header__link-title'
                    type='button'
                    to={route}
                    onClick={onClick}
                >
                    {title}
                </Link>
            </nav>
        </header>
    )
}

export default Header;