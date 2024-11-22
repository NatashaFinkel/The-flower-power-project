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

    const testComponent = <Modal bouquet={modalTest} />;
    const testComponentProps = testComponent.props;

    test('The modal contains an image', () => {
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

    test('The modal contains a title', () => {
        render(
            <Provider store={store}>
                <Modal bouquet={modalTest} />
            </Provider>
        );

        const testModalTitle = testComponentProps.bouquet.mTitle;
        expect(testModalTitle).toBe('test-title-modal');
    });

    test('The modal contains a description', () => {
        render(
            <Provider store={store}>
                <Modal bouquet={modalTest} />
            </Provider>
        );

        const testModalDescription = testComponentProps.bouquet.mDescription;
        expect(testModalDescription).toBe('test-description-modal');
    });

    test('The modal contains a price', () => {
        render(
            <Provider store={store}>
                <Modal bouquet={modalTest} />
            </Provider>
        );

        const testModalPrice = testComponentProps.bouquet.mPrice;
        expect(testModalPrice).toBe(30);
    });
});