// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, test, expect } from '@jest/globals';
import { render, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { addToShoppingList } from '../redux/shoppingListSlice';
import HomePage from '../pages/HomePage';
import Modal from '../components/Modal';

describe('Modal component', () => {

    test('the modal contains an image', () => {
        render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );

        const allClickableElements = document.querySelectorAll('.clickable');
        allClickableElements.forEach((element) => {
            fireEvent.click(element);
            render(
                <Provider store={store}>
                    <Modal />
                </Provider>
            );
            const modalImg = document.querySelector('#modal-img-src');
            expect(modalImg).toHaveAttribute('src');
            expect(modalImg.src).not.toBe('');
        });
    });

    test('the modal contains a title', () => {
        render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );

        const allClickableElements = document.querySelectorAll('.clickable');
        allClickableElements.forEach((element) => {
            fireEvent.click(element);
            render(
                <Provider store={store}>
                    <Modal />
                </Provider>
            );

            const modalTitle = document.querySelector('#modal-title');
            expect(modalTitle.textContent).not.toBe('');
        });
    });

    test('the modal contains a description', () => {
        render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );

        const allClickableElements = document.querySelectorAll('.clickable');
        allClickableElements.forEach((element) => {
            fireEvent.click(element);
            render(
                <Provider store={store}>
                    <Modal />
                </Provider>
            );

            const modalDescription = document.querySelector('#modal-description');
            expect(modalDescription.textContent).not.toBe('');
        });
    });

    test('the modal contains a price', () => {
        render(
            <Provider store={store}>
                <HomePage />
            </Provider>
        );

        const allClickableElements = document.querySelectorAll('.clickable');
        allClickableElements.forEach((element) => {
            fireEvent.click(element);
            render(
                <Provider store={store}>
                    <Modal />
                </Provider>
            );

            const modalPrice = document.querySelector('#modal-price');
            expect(modalPrice.textContent).not.toBe('');
        });
    });

    test('if the user clicks on the button, the bouquet is added to the cart', () => {

        const testBouquet = {
            id: 'test-bouquet-forget-me-not',
            title: 'test-bouquet-Myosotis',
            imgSrc: '../../flowers/purple-1-opti.jpeg',
            imgAlt: 'test-bouquet-Myosotis',
            description: 'Natus e aetatis et vicensimo sorore aetatis.',
            price: '75'
        };

        render(
            <Provider store={store}>
                <Modal bouquet={testBouquet} />
            </Provider>
        );

        const button = document.getElementById("add-bouquet-btn");
        act(() => {
            fireEvent.click(button);
            expect(store.dispatch(addToShoppingList(testBouquet)));
            //  console.log('Contenu du store de test (modal) :', JSON.stringify(store.getState(), null, 2));
        });
    });
});
