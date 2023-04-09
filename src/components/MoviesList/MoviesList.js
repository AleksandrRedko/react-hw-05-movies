import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import s from './MoviesList.module.css';
import mask from '../../images/mask.jpg';

const MoviesList = function ({ array, location }) {
  return (
    <ul className={s.moviesGallery}>
      {array.map(({ id, poster_path, original_title, title, name }) => {
        return (
          <li key={id} className={s.item}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={`${
                  poster_path
                    ? `https://image.tmdb.org/t/p/w1280/${poster_path} `
                    : mask
                }`}
                className={s.image}
                alt={original_title}
              />
              <p className={s.title}>{title ?? name}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
MoviesList.propTypes = {
  array: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
};

export default MoviesList;
