import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from '../../components/table/Table';
import { mockColumns } from '../../.storybook/misc';

describe('Table', () => {
    describe('Table messages', () => {
        it('should always render the table head', () => {
            render(<Table columns={mockColumns} />);
            // Check that the first column heading exists
            expect(screen.getByText(mockColumns[0].displayName)).toBeDefined();
        });
        it('should show a loading message based on the loading prop', () => {
            render(<Table columns={mockColumns} loading />);
            expect(screen.getByText('Gathering your data...')).toBeDefined();
        });
        it('should show an error message based on the error prop', () => {
            render(<Table columns={mockColumns} error />);
            expect(screen.getByText('An error occurred')).toBeDefined();
        });
        it('should allow for a custom error message', () => {
            render(<Table columns={mockColumns} error message="custom error" />);
            expect(screen.getByText('custom error')).toBeDefined();
        });
        it('should show a no results message if there is no table data', () => {
            render(<Table columns={mockColumns} rows={[]} />);
            expect(screen.getByText('No available data to display.')).toBeDefined();
        });
    });
});
