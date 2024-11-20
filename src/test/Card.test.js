// eslint-disable-next-line no-unused-vars
import React from 'react';
import { test, expect } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Card from '../components/Card';
import HomePage from '../pages/HomePage';

test('The card contains an image and a title', () => {
    const bouquetTest = {
        imageSrc: 'test-imageSrc-card-1.jpg',
        imageAlt: 'test alt img card 1',
        imageId: 'test-id-img-card-1',
        imageTitle: 'test-title-card-1',
        imageDescription: 'Test description img card 1',
        imagePrice: 45,
        imageDataTestid: 'data-test-id-img-card-1',
    };

    render(
        <Card bouquet={bouquetTest} />
    );

    const testComponent = <Card bouquet={bouquetTest} />;
    const testComponentProps = testComponent.props;

    const testImageSrc = testComponentProps.bouquet.imageSrc;
    const testImageTitle = testComponentProps.bouquet.imageTitle;

    expect(testImageSrc).toBe('test-imageSrc-card-1.jpg');
    expect(testImageTitle).toBe('test-title-card-1');
});

test('Opens modal at click on the card', () => {
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