/**
 * @jest-environment jsdom
 *
 */
import { resetOrSubmitSearch, shouldResetSearchTerm } from '../../helpers/searchBarHelper';

describe('resetOrSubmitSearch', () => {
    it('should reset search when search the value and search term are the same', () => {
        expect(resetOrSubmitSearch('frogs', 'frogs')).toBeFalsy();
    });
    it('should reset search when there is a search term and value is less than minChars', () => {
        expect(resetOrSubmitSearch('f', 'frogs', 2)).toBeFalsy();
    });
    it('should search when a new search term is provided', () => {
        expect(resetOrSubmitSearch('frogs', '', 2)).toBeTruthy();
    });
});
describe('shouldResetSearchTerm', () => {
    it('should not reset when there is no submitted search term', () => {
        expect(shouldResetSearchTerm({ target: { value: 'f' } }, '')).toBeFalsy();
    });
    it('should reset search when we have searched and there is no text in the input', () => {
        expect(shouldResetSearchTerm({ target: { value: '' } }, 'yolo')).toBeTruthy();
    });
});
