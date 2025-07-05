import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Make sure this imports your Tailwind CSS
import App from './App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
