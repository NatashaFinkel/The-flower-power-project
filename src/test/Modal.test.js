// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Modal from '../components/Modal';

describe('Modal component', () => {
    const testModal = {
        src: 'test-modal-imgSrc.jpg',
        title: 'test-modal-title',
        description: 'this is the test-modal description !',
        price: 65,
    }

    const renderedElement = <Modal modal={testModal} />;

    test('the modal contains an image', () => {
        render(
            <Provider store={store}>
                <Modal modal={testModal} />
            </Provider>
        );

        const renderedElementSrc = renderedElement.props.modal.src;
        const testModalSrc = testModal.src;

        expect(renderedElementSrc).toStrictEqual(testModalSrc);
    });

    test('the modal contains a title', () => {
        render(
            <Provider store={store}>
                <Modal modal={testModal} />
            </Provider>
        );

        const renderedElementTitle = renderedElement.props.modal.title;
        const testModalTitle = testModal.title;

        expect(renderedElementTitle).toStrictEqual(testModalTitle);
    });

    test('the modal contains a description', () => {
        render(
            <Provider store={store}>
                <Modal modal={testModal} />
            </Provider>
        );

        const renderedElementDescription = renderedElement.props.modal.description;
        const testModalDescription = testModal.description;

        expect(renderedElementDescription).toStrictEqual(testModalDescription);
    });

    test('the modal contains a price', () => {
        render(
            <Provider store={store}>
                <Modal modal={testModal} />
            </Provider>
        );

        const renderedElementPrice = renderedElement.props.modal.price;
        const testModalPrice = testModal.price;

        expect(renderedElementPrice).toStrictEqual(testModalPrice);
    });

    //TODO: TEST: the bouquet is added to the cart at click  
});
