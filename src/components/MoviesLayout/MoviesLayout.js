import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import styled from 'styled-components';

import Container from '../Container/Container';
import s from './MoviesLoyout.module.css';

const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;

const MoviesLoyout = () => {
  return (
    <Container>
      <header className={s.header}>
        <nav>
          <ul className={s.navigation}>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default MoviesLoyout;
