import { useEffect, useState, useRef, Suspense } from 'react';
import { HiArrowLeft } from 'react-icons/hi';

import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import fetchApi from '../servise/ApiMovies';
import s from './MovieDetals.module.css';
import mask from '../images/mask.jpg';

function MovieDetals() {
  const [movieIds, setMovieId] = useState('');
  const [detalsMovie, setDetalsMovie] = useState([]);
  const [movieGenres, setMovieGenres] = useState([]);

  const { movieId } = useParams();

  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';
  const backLinkLocationRef = useRef(backLinkHref);

  useEffect(() => {
    setMovieId(movieId);
  }, [movieId]);

  useEffect(() => {
    if (movieIds !== '') {
      fetchApi
        .fetchMovieById(movieIds)
        .then(response => setDetalsMovie(response))
        .catch(error => console.log(error));
    }
  }, [movieIds]);

  useEffect(() => {
    setMovieGenres(detalsMovie.genres);
  }, [detalsMovie]);
  const { poster_path, original_title, overview } = detalsMovie;
  return (
    <div>
      <Link to={backLinkLocationRef.current} className={s.back}>
        <HiArrowLeft size="24" />
        Back to movies
      </Link>

      <div className={s.container}>
        <div className={s.imgContainer}>
          <img
            src={`${
              poster_path
                ? `https://image.tmdb.org/t/p/w1280/${poster_path}`
                : mask
            }`}
            alt={original_title}
            className={s.image}
          />
        </div>
        <div className={s.information}>
          <h2 className={s.name}>{original_title}</h2>
          <h3 className={s.overview}>OVERVIEW</h3>
          <p className={s.overview_text}>{overview}</p>
          <h2 className={s.overview}>GENRES</h2>
          <ul className={s.list}>
            {movieGenres &&
              movieGenres.map(genre => (
                <li key={genre.id} className={s.item}>
                  {genre.name}
                </li>
              ))}
          </ul>

          <h3 className={s.overview}>Additional information</h3>

          <nav>
            <ul className={s.list}>
              <li className={s.item}>
                <Link className={s.link} to="cast">
                  cast
                </Link>
              </li>
              <li className={s.item}>
                <Link className={s.link} to="reviews">
                  reviews
                </Link>
              </li>
            </ul>
            <br />
          </nav>
        </div>
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
export default MovieDetals;
