export const apiBaseUrl = ' https://api.nomoreparties.co/beatfilm-movies';

export function checkQueryResult(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`); // если ошибка, отклоняем промис
}

//запрос на получение с сервера фильмы
export function getMovies() {

    return fetch(apiBaseUrl, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(checkQueryResult)
};
