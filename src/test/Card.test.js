// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import HomePage from '../pages/HomePage';

test('Shows modal on click', () => {
    render(
        <Provider store={store}>
            <HomePage />
        </Provider>
    );

    const cards = screen.getAllByTestId(/card-test-id/);
    const modal = screen.getByTestId('modal-test-id');
    fireEvent.click(cards[0]);

    expect(modal).toBeVisible();
});