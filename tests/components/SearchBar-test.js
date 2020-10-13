import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';

describe('SearchBar', () => {
    beforeEach(() => render(<SearchBar />));
    describe('Dom Nodes', () => {
        it('should render the search bar', () => {
          expect(screen.getByTitle('Search Input').value).toStrictEqual('');
        });
        it('should accept and track input', () => {
          const searchInput = screen.getByTitle('Search Input');
          fireEvent.keyDown(searchInput, { key: 'A', code: 'KeyA' });
          waitFor(() => expect(screen.getByTitle('Search Input').value).toStrictEqual('A'));
          fireEvent.keyDown(searchInput, { key: 'H', code: 'KeyH' });
          waitFor(() => expect(screen.getByTitle('Search Input').value).toStrictEqual('H'));
        });
        it('should be disabled by default', () => {
          const searchInput = screen.getByTitle('Search Input');
          expect(screen.getByTitle('Search Button').disabled).toBeTruthy();
        });
        it('should be disabled if minChars is not met', () => {
          const searchInput = screen.getByTitle('Search Input');
          fireEvent.keyDown(searchInput, { key: 'A', code: 'KeyA' });
          expect(screen.getByTitle('Search Button').disabled).toBeTruthy();
          fireEvent.keyDown(searchInput, { key: 'H', code: 'KeyH' });
          waitFor(() => expect(screen.getByTitle('Search Button').disabled).toBeFalsy());
          fireEvent.keyDown(searchInput, { key: 'Backspace', code: 'Backspace' });
          waitFor(() => expect(screen.getByTitle('Search Button').disabled).toBeTruthy());
        });
    });
});
