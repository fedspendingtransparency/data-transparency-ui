/**
 * @jest-environment jsdom
 *
 */
import React from 'react';
import { render } from '@testing-library/react';
import CardHero from '../../components/cards/CardHero';

const getSrc = (img) => {
    const { container } = render(<CardHero img={img} variant="inset" />);
    return container.querySelector('img').getAttribute('src');
};

describe('CardHero image src', () => {
    it.each([
        ['img/a/b.webp', 'img/a/b.webp'],
        ['../../img/a/b.webp', '../../img/a/b.webp'],
        ['/img/a/b.webp', '/img/a/b.webp'],
        ['https://www.usaspending.gov/img/b.webp', 'https://www.usaspending.gov/img/b.webp'],
        ['img/my file.webp', 'img/my%20file.webp'],
        ['img/my%20file.webp', 'img/my%20file.webp'],
        ['  img/a.webp  ', 'img/a.webp']
    ])('allows %s', (input, expected) => {
        expect(getSrc(input)).toBe(expected);
    });

    it.each([
        'javascript:alert(1)',
        'java\tscript:alert(1)',
        'http://example.com/a.webp',
        '//evil.com/a.webp',
        '\\\\evil.com\\a.webp',
        '\\evil.com',
        '/\\evil.com/a.webp',
        'data:text/html,hi',
        '',
        undefined
    ])('rejects %s', (input) => {
        expect(getSrc(input)).toBeNull();
    });
});
