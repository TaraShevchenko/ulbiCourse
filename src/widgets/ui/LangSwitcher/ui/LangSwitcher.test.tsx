import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LangSwitcher from './LangSwitcher';

describe('Lang Switcher', () => {
    test('should toggle dropdown on button click', () => {
        const { getByText, getByTestId } = render(<LangSwitcher />);

        expect(getByTestId('dropdown')).not.toBeVisible();

        fireEvent.click(getByText('English'));

        expect(getByTestId('dropdown')).toBeVisible();

        fireEvent.click(getByText('English'));

        expect(getByTestId('dropdown')).not.toBeVisible();
    });
});
