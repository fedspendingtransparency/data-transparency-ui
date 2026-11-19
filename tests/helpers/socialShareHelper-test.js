/**
 * @jest-environment jsdom
 *
 */
import sanitizeUrl from '../../helpers/socialShareHelper';

describe('sanitizeUrl', () => {
    it.each([
        ['https://www.usaspending.gov/img/a.webp', 'https://www.usaspending.gov/img/a.webp'],
        ['https://www.usaspending.gov/img/a%20b.webp', 'https://www.usaspending.gov/img/a%20b.webp'],
        ['https://www.usaspending.gov/img/a b.webp', 'https://www.usaspending.gov/img/a%20b.webp'],
        ['https://x.gov/search?q=a%26b', 'https://x.gov/search?q=a%26b'],
        ['https://x.gov/?q=caf%C3%A9', 'https://x.gov/?q=caf%C3%A9'],
        ['https://x.gov/?q=café', 'https://x.gov/?q=caf%C3%A9'],
        ['  https://x.gov/a  ', 'https://x.gov/a'],
        ['https://x.gov/​a', 'https://x.gov/a']
    ])('allows %s', (input, expected) => {
        expect(sanitizeUrl(input)).toBe(expected);
    });

    it.each([
        'javascript:alert(1)',
        'java\tscript:alert(1)',
        'java​script:alert(1)',
        'http://example.com/a',
        'data:text/html,hi',
        'img/a.webp',
        'https://exa mple.com/a',
        '',
        '   ',
        undefined,
        null
    ])('rejects %s', (input) => {
        expect(sanitizeUrl(input)).toBeNull();
    });

    it('removes redirect params pointing off-site', () => {
        expect(sanitizeUrl('https://x.gov/?next=https://evil.com&q=1')).toBe('https://x.gov/?q=1');
    });

    it.each([
        ['https://x.gov/?returnUrl=https://evil.com&q=1', 'https://x.gov/?q=1'],
        ['https://x.gov/?userName=bob&q=1', 'https://x.gov/?q=1'],
        ['https://x.gov/?NEXT=https://evil.com', 'https://x.gov/'],
        ['https://x.gov/?ret%75rnUrl=https://evil.com', 'https://x.gov/']
    ])('removes mixed-case / encoded attack param keys: %s', (input, expected) => {
        expect(sanitizeUrl(input)).toBe(expected);
    });

    it.each([
        ['https://x.gov/?q=a%20b&next=https://evil.com', 'https://x.gov/?q=a%20b'],
        ['https://x.gov/?cb=https://a.gov/x&next=https://evil.com', 'https://x.gov/?cb=https://a.gov/x'],
        ['https://x.gov/?a=1&next=https://evil.com&b=c%26d#frag', 'https://x.gov/?a=1&b=c%26d#frag'],
        ['https://x.gov/?a=1&&flag&next=x', 'https://x.gov/?a=1&&flag']
    ])('leaves remaining params untouched when one is removed: %s', (input, expected) => {
        expect(sanitizeUrl(input)).toBe(expected);
    });

    it('keeps redirect params pointing to usaspending.gov', () => {
        const url = 'https://x.gov/?next=https://www.usaspending.gov/search';
        expect(sanitizeUrl(url)).toBe(url);
    });

    it('keeps redirect params when blockRedirect is false', () => {
        expect(sanitizeUrl('https://x.gov/?next=https://evil.com', false)).toBe('https://x.gov/?next=https://evil.com');
    });
});
