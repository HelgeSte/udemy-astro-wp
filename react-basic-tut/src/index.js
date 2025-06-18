import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // <div id="root"> is in the public/index.html file
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
