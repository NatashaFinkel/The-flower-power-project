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

        const image = screen.getByTestId('modal-title-test-id');
        expect(image.getAttribute('src')).not.toBe('');
    });
});
