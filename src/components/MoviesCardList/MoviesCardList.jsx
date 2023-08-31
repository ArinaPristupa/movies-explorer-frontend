import React from 'react';
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {

    const location = useLocation();

    return (
        <section className='list'>
            <MoviesCard />
            <div className='list_container'>
                {location.pathname === '/movies' && (<button aria-label="Добавить ещё фильмы" className="list__button" type="button">Ещё</button>)}
            </div>
        </section>
    )
}

export default MoviesCardList;