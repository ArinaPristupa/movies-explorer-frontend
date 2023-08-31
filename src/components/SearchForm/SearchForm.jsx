import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import button from '../../images/buttonfilm.svg';
import icon from '../../images/iconbtmfilm.svg';


function SearchForm() {
    return (
        <section className='search'>
            <div className='search__container'>
                <form id='form' className='search__form'>
                    <img className='search__img-icon' src={icon} alt="картинка поиска" />
                    <input
                        className='search__text'
                        type="text"
                        name="search"
                        id="search-text"
                        placeholder="Фильм"
                        required
                    />
                    <button type="submit" className="search__button" ><img className='search__img-button' src={button} alt="кнопка поиска" /></button>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    )
}

export default SearchForm;