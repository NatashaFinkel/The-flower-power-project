// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import HomePage from '../pages/HomePage';
import flowers from '../../flowers.json';

describe('Gallery items', () => {
    test('Each item from the flowers.json is rendered on the bouquets gallery', () => {
        render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );
        const cards = screen.getAllByTestId(/card-test-id/);
        expect(cards.length).toBe(flowers.length);
    });
});