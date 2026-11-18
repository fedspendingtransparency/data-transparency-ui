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
        ['https://www.usaspending.gov/img/b.webp', 'https://www.usaspending.gov/img/b.webp']
    ])('allows %s', (input, expected) => {
        expect(getSrc(input)).toBe(expected);
    });

    it.each([
        'javascript:alert(1)',
        'http://example.com/a.webp',
        '//evil.com/a.webp',
        '\\evil.com\a.webp',
        'data:text/html,hi',
        ''
    ])('rejects %s', (input) => {
        expect(getSrc(input)).toBe('null');
    });
});
