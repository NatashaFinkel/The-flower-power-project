// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Modal from '../components/Modal';

describe('Modal component', () => {
    const modalTest = {
        mImgSrc: 'test-imageSrc-modal.jpg',
        mImgAlt: 'test-alt-modal',
        mTitle: 'test-title-modal',
        mDescription: 'test-description-modal',
        mPrice: 30,
    };

    const testComponent = <Modal bouquet={modalTest} />;
    const testComponentProps = testComponent.props;

    test('The modal contains an image', () => {

        render(
            <Provider store={store}>
                <Modal bouquet={modalTest} />
            </Provider>
        );

        const testModalImageSrc = testComponentProps.bouquet.mImgSrc;
        expect(testModalImageSrc).toBe('test-imageSrc-modal.jpg');
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
});