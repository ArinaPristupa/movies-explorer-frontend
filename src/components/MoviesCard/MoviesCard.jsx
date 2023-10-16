import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, onMoviesLike, onMoviesDelete, saved, isSavedMovies, savedMovies }) {

    const durationFilm = (duration) => {
        const hours = Math.floor(duration / 60);
        const min = duration % 60;
        return `${hours}ч${min}м`;
    };

    const movieLikeButtonClassName = `${saved ? 'element__img-like element__img-like_active' : 'element__img-like element__img-like_noactive'}`;

    function handleMoviesClick() {

        if (saved) {
            onMoviesDelete(savedMovies.filter((item) => item.movieId === movie.id)[0])
        }
        else {
            onMoviesLike(movie)
        }
    };

    function handleDeleteClick() {

        onMoviesDelete(movie);

    };

    return (

        <li className='element' key={movie.id}>

            <div className='element__info'>

                <div className="element__mobile">
                    <h2 className="element__title">{movie.nameRU}</h2>
                    <span className="element__duration">{durationFilm(movie.duration)}</span>
                </div>

                {isSavedMovies ? (
                    <button onClick={handleDeleteClick} aria-label="Удалить фильм" className="element__trash" type="button"></button>
                ) : (
                    <button onClick={handleMoviesClick} aria-label="Отметка мне нравится" className={movieLikeButtonClassName} type="button"></button>)}
            </div>

            <a target='_blank' href={movie.trailerLink} rel='noreferrer'>
                <img className="element__img" alt={`Название фильма ${movie.nameRU}`}
                    src={isSavedMovies ? movie.image : `https://api.nomoreparties.co/${movie.image.url}`} />
            </a>
        </li>
    )
}

export default MoviesCard;

