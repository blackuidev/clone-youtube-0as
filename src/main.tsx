import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Ensure BrowserRouter is imported

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    { /* App.tsx already contains BrowserRouter */}
    <App />
  </React.StrictMode>,
);
