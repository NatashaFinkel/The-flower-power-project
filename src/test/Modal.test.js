// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Modal from '../components/Modal';

describe('Modal component', () => {
    test('The modal contains an image', () => {
        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );
        const image = screen.getByTestId('modal-img-test-id');
        expect(image.getAttribute('src')).not.toBe('');
    });
    test('The modal contains a title', () => {
        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );
        const title = screen.getByTestId('modal-title-test-id');
        expect(title.textContent).not.toBe(null);
    });
    test('The modal contains a description', () => {
        render(
            <Provider store={store}>
                <Modal />
            </Provider>
        );
        const description = screen.getByTestId('modal-description-test-id');
        expect(description.textContent).not.toBe(null);
    });
});