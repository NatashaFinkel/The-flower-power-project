import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import './style/index.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  React.createElement(Provider, { store: store },
    React.createElement(App, null)
  )
);
