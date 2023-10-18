import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

import button from '../../images/buttonfilm.svg';
import icon from '../../images/iconbtmfilm.svg';

function SearchForm({ filterMovies, searchMovies, shortMovies }) {

    const location = useLocation();

    const [search, setSearch] = React.useState('');
    const [isSearchError, setIsSearchError] = React.useState(false);

    function handleChangeSearch(e) {
        setSearch(e.target.value)
    }

    React.useEffect(() => {

        if (
            location.pathname === '/movies'
            &&
            localStorage.getItem('filmSearch')
        ) {
            setSearch(localStorage.getItem('filmSearch'))
        }

    }, [location]);

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();

        // Передаём значения управляемых компонентов во внешний обработчик
        if (
            search.trim().length === 0) {
            setIsSearchError(true)
        }
        else {
            setIsSearchError(false)
            searchMovies(search)
        }
    }

    return (
        <section className='search'>
            <div className='search__container'>
                <form id='form' onSubmit={handleSubmit} className='search__form'>
                    <img className='search__img-icon' src={icon} alt="картинка поиска" />
                    <input
                        className='search__text'
                        type="text"
                        name="search"
                        id="search-text"
                        placeholder="Фильм"
                        onChange={handleChangeSearch}
                        value={search}
                    />
                    <button type="submit" className="search__button" ><img className='search__img-button' src={button} alt="кнопка поиска" /></button>
                </form>
                <FilterCheckbox filterMovies={filterMovies} isChecked={shortMovies} />
                {isSearchError && (<span className='search__form-error'>Введите поисковой запрос!</span>)}
            </div>
        </section>
    )
}

export default SearchForm;
