// eslint-disable-next-line no-unused-vars
import React from "react";
import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import { screen } from "@testing-library/react";
import Modal from '../components/Modal';

describe('Modal component', () => {
  test('The modal contains an image', () => {
    render(<Modal />);
    const image = screen.getByTestId('modal-title-test-id');
    expect(image.getAttribute('src')).not.toBe('');
  });
  test('The modal contains a title', () => {
    render(<Modal />);
    const title = screen.getByTestId('modal-title-test-id');
    expect(title.textContent).not.toBe(null);
  });
  test('The modal contains a description', () => {
    render(<Modal />);
    const description = screen.getByTestId('modal-description-test-id');
    expect(description.textContent).not.toBe(null);
  });
});