import { React, useState } from 'react';
import { useLocation } from "react-router-dom";
import './MoviesCard.css';
import baseMovies from '../../utils/baseMovies';

function MoviesCard() {

    const location = useLocation();

    const [isCard, setIsCard] = useState();

    const handleCardFavorites = () => {
        setIsCard(!isCard);
    }

    const showsMovies = () => {
        return (location.pathname === '/movies')
    };

    const showsMoviesSaved = () => {
        return (location.pathname === '/saved-movies')
    };

    return (

        <ul className='elements'>
            {
                baseMovies.map((card) => (<li className="element">
                    <div className='element__info'>
                        <div className="element__mobile">
                            <h2 className="element__title">{card.title}</h2>
                            <span className="element__duration">{card.duration}</span>
                        </div>
                        {showsMovies() && (<button onClick={handleCardFavorites} aria-label="Отметка мне нравится" className={`element__img-like element__img-like_${!isCard ? 'active' : 'noactive'}`} type="button"></button>)}
                        {showsMoviesSaved() && (<button aria-label="Удалить фильм" className="element__trash" type="button"></button>)}</div>
                    <img className="element__img" src={card.image} alt={`Название фильма ${card.title}`} />
                </li>))}
        </ul>
    )
}


export default MoviesCard;