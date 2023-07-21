import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import Header from '../Header/Header';

import Main from '../Main/Main';

import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

import Profile from '../Profile/Profile';

import Footer from '../Footer/Footer';

import Register from '../Register/Register';
import Login from '../Login/Login';

import ErrorNotFound from '../ErrorNotFound/ErrorNotFound';

function App() {
  return (
    <div className='page'>
      <div className='page__container'>
        <Routes>
          <Route
            path='/signin'
            element={
              <>
                <Login />
              </>
            }
          />

          <Route
            path='/signup'
            element={
              <>
                <Register />
              </>
            }
          />

          <Route
            exact
            path='/'
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path='/movies'
            element={
              <>
                <Header />
                <Movies />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path='/saved-movies'
            element={
              <>
                <Header />
                <SavedMovies />
                <Footer />
              </>
            }
          />

          <Route
            exact
            path='/profile'
            element={
              <>
                <Header />
                <Profile />
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
      </div>
    </div>
  );
}

export default App;
