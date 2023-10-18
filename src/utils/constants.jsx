//фильтр поиска фильмов
export function filterMovies(movies, query) {
  const moviesQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU || '').toLowerCase().trim();
    const movieEn = String(movie.nameEN || '').toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return (
      movieRu.includes(userQuery) || movieEn.includes(userQuery)
    );
  });
  return moviesQuery;
}

//короткометражки
export function filterShort(movies) {
  return movies.filter((movie) => movie.duration < 40);
}
