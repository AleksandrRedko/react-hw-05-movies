import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import fetchApi from '../../servise/ApiMovies';
import s from './Reviews.module.css';

export const Reviews = () => {
  const [movieIds, setMovieId] = useState('');
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    setMovieId(movieId);
  }, [movieId]);

  useEffect(() => {
    if (movieIds === '') {
      return;
    }
    fetchApi
      .fetchReviewsById(movieIds)
      .then(response => setReviews(response.results))
      .catch(error => console.log(error));
  }, [movieIds]);
  return (
    <div>
      {reviews.length !== 0 && (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <h2 className={s.title}>{item.author}</h2>
              <p className={s.text}>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviews.length === 0 && <h1>We dont have any reviews for this movie</h1>}
    </div>
  );
};
