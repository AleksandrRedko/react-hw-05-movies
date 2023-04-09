const API_KEY = '14f90a9673a8e38c0e2c74de4fe9bbab';
const BASE_URL = 'https://api.themoviedb.org/3/';

const fetchPopularMovies = async function () {
  const response = await fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

const fetchMovieById = async function (id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
};
const fetchCastById = async function (id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();
  return data;
};

const fetchReviewsById = async function (id) {
  const response = await fetch(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('что-то не так'));
};
const fetchMovies = async function (search) {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${search}&include_adult=true`
  );
  const data = await response.json();
  return data;
};

const fetchApi = {
  fetchPopularMovies,
  fetchMovieById,
  fetchCastById,
  fetchReviewsById,
  fetchMovies,
};
export default fetchApi;
