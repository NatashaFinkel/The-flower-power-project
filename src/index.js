import React from 'react';
import ReactDOM from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
import AppWrapper from './components/AppWrapper.jsx';
import './style/index.css';

root.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(AppWrapper, null)
  )
);