// eslint-disable-next-line no-unused-vars
import React from 'react';
import { describe, expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

describe('The App must renders properly', () => {
    test('if the logo appears on the page, then the app does render properly', () => {
        render(<Header />);
        const logo = screen.getByTestId("logo-test-id");
        expect(logo).toBeInTheDocument();
    });

    //TODO: faire un test pour chaque page ?
});