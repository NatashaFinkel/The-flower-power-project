// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import App from '../App';

const AppWrapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

export default AppWrapper;