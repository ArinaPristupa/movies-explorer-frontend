import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { filterShort, filterMovies } from '../../utils/constants';

function SavedMovies({ isloggedIn, onMoviesDelete, savedMovies }) {

  const [isErrorNotFound, setIsErrorNotFound] = React.useState(false);
  const [isShortMovies, setIsShortMovies] = React.useState(false);

  const [isfilterMovies, setIsfilterMovies] = React.useState(savedMovies);
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {

    const filter = filterMovies(savedMovies, search);

    const filteredMovies = isShortMovies ? filterShort(filter) : filter;
    setIsfilterMovies(filteredMovies);

    if (filteredMovies.length === 0) {
      setIsErrorNotFound(true);
    } else {
      setIsErrorNotFound(false);
    }
  }, [savedMovies, isShortMovies, search]);

  function onSearchMovies(search) {
    setSearch(search);
  };

  //переключение короткометражных фильмов
  function handleShortMoviesToggle() {
    setIsShortMovies(!isShortMovies);
  };

  return (
    <>
      <Header isloggedIn={isloggedIn} />
      <main className='saved-movies'>
        <SearchForm filterMovies={handleShortMoviesToggle} searchMovies={onSearchMovies} />
        <MoviesCardList movies={isfilterMovies} onMoviesDelete={onMoviesDelete} isErrorNotFound={isErrorNotFound} savedMovies={savedMovies} isSavedMovies={true} />
      </main>
      <Footer />
    </>
  )
}

export default SavedMovies;