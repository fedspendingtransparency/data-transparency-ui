/**
 * CardHero.jsx
 * Created by Andrea Blackwell  09/09/2022
 */

import PropTypes from "prop-types";
import React from "react";
import sanitizeUrl from '../../helpers/socialShareHelper';

const propTypes = {
    img: PropTypes.string,
    fill: PropTypes.string,
    variant: PropTypes.string, // inset or expanded
    imageContainerHeight: PropTypes.string,
    thumbnail: PropTypes.bool,
    children: PropTypes.element,
    onClick: PropTypes.func
};

// Same-origin relative image paths ("img/a.webp", "../img/a.webp", "/img/a.webp") are allowed.
// Anything with a scheme, or a protocol-relative ("//host") / backslash variant, goes through sanitizeUrl.
// Returns undefined (rather than null) when rejected so React omits the src attribute entirely.
const getSafeImageSrc = (img) => {
    if (typeof img !== "string") return undefined;
    const trimmed = img.trim();
    // whitespace/invisible chars are stripped only for the scheme check (e.g. "java\tscript:")
    const stripped = trimmed.replace(/[\s\p{Cf}]/gu, '');
    if (stripped === "" || /^([a-z][a-z0-9+.-]*:|[/\\]{2}|\\)/i.test(stripped)) {
        return sanitizeUrl(img) || undefined;
    }
    // decode first so already-encoded paths ("a%20b.webp") aren't double-encoded
    try {
        return encodeURI(decodeURI(trimmed));
    }
    catch {
        return encodeURI(trimmed);
    }
};

const CardHero = ({
    img, fill, variant, imageContainerHeight, thumbnail, children, onClick
}) => (
    <div>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <div
            className={`card__hero ${variant}`}
            onClick={onClick}
            style={{ backgroundColor: `${fill}`, height: `${imageContainerHeight}` }}>
            {thumbnail
                // eslint-disable-next-line react/jsx-no-useless-fragment
                ? <>{ children }</>
                : <img src={getSafeImageSrc(img)} role="presentation" alt="" />}
        </div>
    </div>
);

CardHero.propTypes = propTypes;
export default CardHero;
