import { resetOrSubmitSearch, changeSearchTerm } from '../../helpers/searchBarHelper';

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
describe('changeSearchTerm', () => {
    it('should set the value on change', () => {
        expect(changeSearchTerm('', 'f')).toBeTruthy();
    });
    it('should reset search when we have searched and there is no text in the input', () => {
        expect(changeSearchTerm('yolo', { target: { value: '' } })).toBeFalsy();
    });
});
