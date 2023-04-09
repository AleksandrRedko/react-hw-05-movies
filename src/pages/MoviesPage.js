import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import fetchApi from '../servise/ApiMovies';
import MoviesList from '../components/MoviesList/MoviesList';
import s from './MoviesPage.module.css';

function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const movieName = searchParams.get('query') ?? '';

  const location = useLocation();

  const [searcMovies, setSearchMovies] = useState([]);
  const updateQueryString = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };

  const submitForm = e => {
    e.preventDefault();
    updateQueryString(searchQuery);
  };
  useEffect(() => {
    if (movieName === '') {
      return;
    }
    fetchApi
      .fetchMovies(movieName)
      .then(response => setSearchMovies(response.results))
      .catch(error => console.log(error));
  }, [movieName]);

  return (
    <>
      <form onSubmit={submitForm} className={s.form}>
        <button className={s.searchFormButton} type="submit" />

        <input
          onChange={e => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Введите название фильма"
          className={s.input}
        ></input>
      </form>

      <MoviesList array={searcMovies} location={location} />
    </>
  );
}
export default MoviesPage;
