import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { filterShort, filterMovies } from '../../utils/constants';

import { getMovies } from '../../utils/MoviesApi';

function Movies({ isloggedIn, onMoviesDelete, onMoviesLike, savedMovies }) {

  const [isfilterMovies, setIsfilterMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const [isErrorNotFound, setIsErrorNotFound] = React.useState(false);
  const [isErrorRequest, setIsErrorRequest] = React.useState(false);

  const [initialFilms, setInitialFilms] = React.useState([]);
  const [isShortMovies, setIsShortMovies] = React.useState(false);

  //список фильмов из хранилища
  React.useEffect(() => {

    if (localStorage.getItem('films')) {

      const movies = JSON.parse(localStorage.getItem('films'))

      setInitialFilms(movies)

      if (localStorage.getItem('shortFilms') === 'true') {
        setIsfilterMovies(filterShort(movies))
      } else {
        setIsfilterMovies(movies)
      }
    }
  }, []);


  //короткометражки из хранилища
  React.useEffect(() => {

    if (localStorage.getItem('shortFilms') === 'true') {

      setIsShortMovies(true)
    } else {
      setIsShortMovies(false)
    }

  }, []);

  //были ли найдены фильмы по запросу
  React.useEffect(() => {

    if (localStorage.getItem('filmSearch')) {

      if (isfilterMovies.length === 0) {
        setIsErrorNotFound(true)
      }

      else {
        setIsErrorNotFound(false)
      }
    }

    else {
      setIsErrorNotFound(false)
    }

  }, [isfilterMovies]);

  //поиск фильмов
  function handleSearchMovies(search) {

    localStorage.setItem('filmSearch', search)
    localStorage.setItem('shortFilms', isShortMovies)

    if (localStorage.getItem('allFilms')) {

      const movies = JSON.parse(localStorage.getItem('allFilms'))

      handleFilterMovies(movies, search, isShortMovies)
    }
    else {
      setIsLoading(true)
      getMovies()
        .then((movie) => {

          handleFilterMovies(movie, search, isShortMovies)

          setIsErrorRequest(false)

        })
        .catch((err) => {

          setIsErrorRequest(true)

          console.log(err)
        })
        .finally(() => {

          setIsLoading(false)

        })
    }
  };

  //обновление отфильтрованных фильмов
  function handleFilterMovies(movies, search, short) {

    const updateFilterFilm = filterMovies(movies, search, short)

    setIsfilterMovies(short ? filterShort(updateFilterFilm) : updateFilterFilm)

    setInitialFilms(updateFilterFilm)

    localStorage.setItem('films', JSON.stringify(updateFilterFilm))
    localStorage.setItem('allFilms', JSON.stringify(movies))

  };

  //переключение короткометражных фильмов
  function handleShortMoviesToggle() {

    setIsShortMovies(!isShortMovies);

    if (!isShortMovies) {

      if (filterShort(initialFilms).length === 0) {
        setIsfilterMovies(filterShort(initialFilms));
      } else {
        setIsfilterMovies(filterShort(initialFilms));
      }
    } else {
      setIsfilterMovies(initialFilms);
    }

    localStorage.setItem('shortFilms', !isShortMovies);
  }

  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main className='movies'>
        <SearchForm filterMovies={handleShortMoviesToggle} searchMovies={handleSearchMovies} shortMovies={isShortMovies} />
        <MoviesCardList movies={isfilterMovies} onMoviesDelete={onMoviesDelete} onMoviesLike={onMoviesLike} isLoading={isLoading} isErrorNotFound={isErrorNotFound} isErrorRequest={isErrorRequest} savedMovies={savedMovies} isSavedMovies={false} />
      </main>
      <Footer />
    </>

  )
}

export default Movies;