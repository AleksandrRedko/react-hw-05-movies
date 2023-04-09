import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import fetchApi from '../servise/ApiMovies';
import MoviesList from '../components/MoviesList/MoviesList';

function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchApi
      .fetchPopularMovies()
      .then(response => setPopularMovies(response.results))
      .catch(error => console.log(error));
  }, []);

  return <MoviesList array={popularMovies} location={location} />;
}
export default HomePage;
