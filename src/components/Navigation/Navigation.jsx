import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";

function Navigation({ handleCloseClick }) {
    return (
        <section className='navigation'>

            <div className='navigation__container'></div>
            <div className='navigation__content'>

                <button type='button' className='navigation__btm-close' onClick={handleCloseClick}></button>

                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <Link to='/' className='navigation__link'>Главная</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link to='/movies' className='navigation__link'>Фильмы</Link>
                    </li>
                    <li className='navigation__item'>
                        <Link to='/saved-movies' className='navigation__link'>Сохранённые фильмы</Link>
                    </li>
                        <Link to='/profile' className='navigation__button navigation__button-account'
                            type='button'>
                            <p className='navigation__title'>Аккаунт</p>
                        </Link>
                </ul>

            </div>

        </section>
    )
}

export default Navigation;