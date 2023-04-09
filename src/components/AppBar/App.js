import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import MoviesLoyout from '../MoviesLayout/MoviesLayout';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetals = lazy(() => import('../../pages/MovieDetals'));
const NotFoundView = lazy(() => import('../NotFoundView/NotFoundView'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() =>
  import('../Reviews/Reviews').then(module => {
    return {
      ...module,
      default: module.Reviews,
    };
  })
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MoviesLoyout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetals />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
}
export default App;
