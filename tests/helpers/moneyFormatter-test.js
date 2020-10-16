/**
 * moneyFormatter-test.js
 * Created by Kevin Li 1/25/17
 */

import { formatMoney } from '../../helpers/moneyFormatter';

describe('Money Formatter helper functions', () => {
    it('should round monetary values to the nearest dollar', () => {
        const formattedDown = formatMoney(123.45);
        expect(formattedDown).toEqual('$123');

        const formattedUp = formatMoney(123.75);
        expect(formattedUp).toEqual('$124');

        const formattedHalf = formatMoney(123.50);
        expect(formattedHalf).toEqual('$124');
    });

    it('should format positive values to $XXX,XXX format', () => {
        const formatted = formatMoney(12345678.23);
        expect(formatted).toEqual('$12,345,678');
    });

    it('should format negative values to -$XXX,XXX format', () => {
        const formatted = formatMoney(-12345678.23);
        expect(formatted).toEqual('-$12,345,678');
    });

    it('should handle zero values as $0', () => {
        const formatted = formatMoney(0);
        expect(formatted).toEqual('$0');
    });
});
