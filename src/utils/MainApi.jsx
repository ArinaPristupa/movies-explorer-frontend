export const apiBaseUrl = 'https://api.movies.pristupa.nomoredomains.xyz';

export const checkQueryResult = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`); // если ошибка, отклоняем промис
}

// логин пользователя
export const loginUse = (email, password) => {
    return fetch(`${apiBaseUrl}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then(checkQueryResult)
};

//регистрация пользователя
export const registerUser = (name, email, password) => {

    return fetch(`${apiBaseUrl}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    })
        .then(checkQueryResult)
}

//запрос для проверки валидности токена и получения email
export const getToken = (jwt) => {

    return fetch(`${apiBaseUrl}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
        },
    })
        .then(checkQueryResult)
};

// //гет запрос подгрузки информации о пользователe с сервера
export const getInformationUser = () => {
    const token = localStorage.getItem('jwt');

    return fetch(`${apiBaseUrl}/users/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })
        .then(checkQueryResult)
}

//гет запрос подгрузки фильмов с сервера
export const getInitialMovies = () => {
    const token = localStorage.getItem('jwt');

    return fetch(`${apiBaseUrl}/movies`, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        method: 'GET',
    })
        .then(checkQueryResult)
}

//редактируем данные профиля
export const getEditedDataProfile = (newData) => {
    const token = localStorage.getItem('jwt');

    return fetch(`${apiBaseUrl}/users/me`, {
        method: 'PATCH',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: newData.name,
            email: newData.email,
        })
    })
        .then(checkQueryResult)
}

//добавление нового фильма в сохранённые фильмы
export const addNewMovies = (data) => {
    const token = localStorage.getItem('jwt');

    return fetch(`${apiBaseUrl}/movies`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            country: data.country,
            director: data.director,
            duration: data.duration,
            year: data.year,
            description: data.description,
            image: 'https://api.nomoreparties.co' + data.image.url,
            trailerLink: data.trailerLink,
            thumbnail: 'https://api.nomoreparties.co' + data.image.formats.thumbnail.url,
            movieId: data.id,
            nameRU: data.nameRU,
            nameEN: data.nameEN,
        })
    })
        .then(checkQueryResult)
}

//удаление фильма из сохранённых фильмов
export const deleteMovies = (data) => {
    const token = localStorage.getItem('jwt');

    return fetch(`${apiBaseUrl}/movies/${data}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    })
        .then(checkQueryResult)
}
