import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/AppBar/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/AleksandrRedko/react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
