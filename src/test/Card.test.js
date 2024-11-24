// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import HomePage from '../pages/HomePage';

describe('Card component', () => {

    test('Each card contains an image', () => {
        render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );

        const allCardImg = document.querySelectorAll('.card-img');
        allCardImg.forEach((image) => {
            expect(image).toHaveAttribute('src');
            expect(image.src).not.toBe('');
        });
    });

    test('Each card contains a title', () => {
        render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );

        const allCardTitles = document.querySelectorAll('.card-title');
        allCardTitles.forEach((title) => {
            expect(title.textContent).not.toBe('');
        });
    });

    test('When the user clicks on the card, the modal opens', () => {
        render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );

        const modal = screen.getByTestId('modal-test-id');
        expect(modal.id).toBe('modal-content');

        const allClickableElements = document.querySelectorAll('.clickable');
        allClickableElements.forEach((element) => {
            fireEvent.click(element);
            expect(modal.id).not.toBe('modal-content');
            expect(modal.id).not.toBe('');
        });
    });
});