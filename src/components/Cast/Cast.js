import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import fetchApi from '../../servise/ApiMovies';
import s from './Cast.module.css';
import mask from '../../images/mask.jpg';

function Cast() {
  const [movieIds, setMovieId] = useState('');
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    setMovieId(movieId);
  }, [movieId]);

  useEffect(() => {
    if (movieIds === '') {
      return;
    }
    fetchApi
      .fetchCastById(movieIds)
      .then(response => setCast(response.cast))
      .catch(error => console.log(error));
  }, [movieIds]);

  return (
    <div>
      <ul className={s.castGallery}>
        {cast.map(item => (
          <li key={item.id} className={s.item}>
            <img
              src={`${
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
                  : mask
              }`}
              width="50px"
              className={s.image}
              alt={item.name}
            />
            <h2 className={s.title}>{item.name}</h2>
            <h3 className={s.title}>character :{item.character}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Cast;
