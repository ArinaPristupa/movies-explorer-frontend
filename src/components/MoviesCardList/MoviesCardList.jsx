import React from 'react';
import { useLocation } from "react-router-dom";
import './MoviesCardList.css';

import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ movies, onMoviesDelete, onMoviesLike, isLoading, isErrorNotFound, isErrorRequest, savedMovies, isSavedMovies }) {

  const location = useLocation();

  const [visibleFilm, setVisibleFilm] = React.useState(0);

  //получает сохранённый фильм из избранных
  function getMovieFromFavorites(savedMovies, movie) {

    return savedMovies.find((savedMovie) => savedMovie.movieId === movie.id)

  };

  React.useEffect(() => {
    const shownCount = () => {
      if (window.innerWidth > 780) {
        setVisibleFilm(7);
      } else {
        setVisibleFilm(5);
      }
    };

    shownCount();
  }, []);


  //работа кнопки ещё
  function pressMoreButton() {

    if (window.innerWidth > 780) {

      setVisibleFilm(visibleFilm + 2)

    } else { setVisibleFilm(visibleFilm + 1) }
  };

  return (

    <section className="list">
      {isLoading && <Preloader />}
      {isErrorRequest && !isLoading && (<p className="list__error">Ошибка! Попробуйте ещё раз.</p>)}
      {isErrorNotFound && !isLoading && (<p className="list__error">Ничего не найдено!</p>)}
      {!isLoading && !isErrorRequest && !isErrorNotFound && (
        <>
          {location === "/saved-movies" ? (
            <>
              <ul className="elements">
                {movies && movies.map((movie) => (
                  <MoviesCard
                    key={isSavedMovies ? movie._id : movie.id}
                    saved={getMovieFromFavorites(savedMovies, movie)}
                    movies={movies}
                    movie={movie}
                    isSavedMovies={isSavedMovies}
                    onMoviesLike={onMoviesLike}
                    onMoviesDelete={onMoviesDelete}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
            </>
          ) : (
            <>
              <ul className="elements">
                {movies && movies.slice(0, visibleFilm).map((movie) => (
                  <MoviesCard
                    key={isSavedMovies ? movie._id : movie.id}
                    saved={getMovieFromFavorites(savedMovies, movie)}
                    movies={movies}
                    movie={movie}
                    isSavedMovies={isSavedMovies}
                    onMoviesLike={onMoviesLike}
                    onMoviesDelete={onMoviesDelete}
                    savedMovies={savedMovies}
                  />
                ))}
              </ul>
              <div className="list-movies__button-container">
                {movies && movies.length > visibleFilm ? (<button className="list-movies__button" onClick={pressMoreButton}>Ещё</button>) : ('')}
              </div>
            </>
          )}
        </>
      )}
    </section>
  )
}

export default MoviesCardList;