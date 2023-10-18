import React from 'react';
import { Route, Routes, useLocation, useNavigate, Navigate } from 'react-router-dom';

import './App.css';

import * as api from '../../utils/MainApi';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooItip from '../InfoTooItip/InfoTooItip';

function App() {

  const [currentUser, setCurrentUser] = React.useState({});

  const [isInfoToolTipPopupOpen, setisInfoToolTipPopupOpen] = React.useState(false);
  const [isInfoToolTipData, setisInfoToolTipData] = React.useState(false);

  const [movies, setMovies] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const [isDataLoaded, setIsDataLoaded] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  //локальное хранилище, проверяем токен есть ли в нём
  React.useEffect(() => {
    const token = localStorage.getItem('jwt');

    if (token) {
      api
        .getToken(token)
        .then(res => {
          if (res) {
            localStorage.removeItem('allFilms')
            setIsLoggedIn(true);
          }
          navigate(location.pathname);
        })
        .catch((err) => {
          console.log(err); // выведем ошибку в консоль
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isOpen = isInfoToolTipPopupOpen;

  React.useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if (isOpen) { // навешиваем только при открытии
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen])

  function closeAllPopups() {
    setisInfoToolTipPopupOpen(false)
  }

  function closeOverlay(event) {
    if (event.target === event.currentTarget) {
      closeAllPopups();
    }
  }

  function register({ name, email, password }) {
    setIsLoading(true);
    api
      .registerUser(name, email, password)
      .then(() => {
        setisInfoToolTipPopupOpen(true);
        setisInfoToolTipData(true);
        login({ email, password });
      })
      .catch((err) => {
        setisInfoToolTipPopupOpen(true);
        setisInfoToolTipData(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function login({ email, password }) {
    setIsLoading(true);
    api
      .loginUse(email, password)
      .then((res) => {
        if (res) {
          setisInfoToolTipPopupOpen(true);
          setisInfoToolTipData(true);
          localStorage.setItem("jwt", res.token);
          navigate('/movies');
          setIsLoggedIn(true);
        }
      })
      .catch((err) => {
        setisInfoToolTipPopupOpen(true);
        setisInfoToolTipData(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function onSignOut() {
    localStorage.removeItem('jwt')
    setIsLoggedIn(false);
    localStorage.removeItem('allFilms');
    localStorage.removeItem('films');
    localStorage.removeItem('shortFilms');
    localStorage.removeItem('filmSearch');
    navigate('/');
  }

  React.useEffect(() => {
    if (!isDataLoaded && isLoggedIn) {
      api.getInformationUser()
        .then((profileData) => {
          setCurrentUser(profileData);
        })
        .catch((err) => {
          console.log(err);
        });

      api.getInitialMovies()
        .then((moviesData) => {
          setMovies(moviesData.reverse());
        })
        .catch((err) => {
          console.log(err);
        });

      setIsDataLoaded(true);
    }
  }, [isLoggedIn, isDataLoaded, navigate]);


  //обновление профиля
  function handleUpdateUser(data) {
    setIsLoading(true);
    api
      .getEditedDataProfile(data)
      .then((newData) => {
        setisInfoToolTipPopupOpen(true);
        setisInfoToolTipData(true);
        setCurrentUser(newData.data);
      })
      .catch((err) => {
        setisInfoToolTipPopupOpen(true);
        setisInfoToolTipData(false);
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => setIsLoading(false))
  }

  //лайк фильма и добавление фильма в сохранённые 
  function handleMoviesLike(movie) {

    // Отправляем запрос в API и получаем обновлённые данные 
    api
      .addNewMovies(movie)
      .then(newMovies =>
        setMovies([newMovies, ...movies])
      )
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  //удаление лайка и удаление фильма из сохранённых
  function handleMoviesDelete(movies) {
    api
      .deleteMovies(movies._id)
      .then(() => {
        setMovies((state) => state.filter((item) => item._id !== movies._id));
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <div className='page__container'>
          <Routes>
            <Route
              path='/signin'
              element={
                isLoggedIn ? <Navigate to="/movies" /> : <Login isLoading={isLoading} handleLogin={login} />
              }
            />

            <Route
              path='/signup'
              element={
                isLoggedIn ? <Navigate to="/movies" /> : <Register isLoading={isLoading} handleRegister={register} />
              }
            />

            <Route
              exact
              path='/'
              element={
                <>
                  <Header isloggedIn={isLoggedIn} />
                  <Main />
                  <Footer />
                </>
              }
            />

            <Route
              exact
              path={'/movies'}
              element={
                <ProtectedRoute
                  path='/movies'
                  component={Movies}
                  isloggedIn={isLoggedIn}
                  onMoviesDelete={handleMoviesDelete}
                  onMoviesLike={handleMoviesLike}
                  savedMovies={movies}
                />
              }
            />

            <Route
              exact
              path={'/saved-movies'}
              element={
                <ProtectedRoute
                  path='/saved-movies'
                  component={SavedMovies}
                  isloggedIn={isLoggedIn}
                  onMoviesDelete={handleMoviesDelete}
                  savedMovies={movies}
                />
              }
            />

            <Route
              exact
              path={'/profile'}
              element={
                <>
                  <Header isloggedIn={isLoggedIn} />
                  <ProtectedRoute
                    path='/profile'
                    component={Profile}
                    isloggedIn={isLoggedIn}
                    onUpdateUser={handleUpdateUser}
                    exit={onSignOut}
                    isLoading={isLoading}
                  />
                </>
              }
            />

            <Route
              path='*'
              element={
                <ErrorNotFound />
              }
            />

          </Routes>

          <InfoTooItip
            isOpen={isInfoToolTipPopupOpen}
            onCloseOverlay={closeOverlay}
            onClose={closeAllPopups}
            isInfoToolTipData={isInfoToolTipData}
          />

        </div>
      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;