import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Styles/index.css';
import App from './App';
import reportWebVitals from '../src/Utilitários/reportWebVitals';
//import letraE from'../src/img/E.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
