/**
 * Carousel.jsx
 * Created by Kevin Li 1/22/18
 */

import React, { cloneElement, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

const propTypes = {
    items: PropTypes.array.isRequired
};

require('../styles/components/_carousel.scss');

const Carousel = ({ items }) => {
    const [page, setPage] = useState(1);
    const [isDragging, setIsDragging] = useState(false);
    const lastDragX = useRef(null);
    const currentX = useRef(0);
    const instanceId = useRef(uniqueId());
    const carouselList = useRef(null);
    const carouselContainer = useRef(null);

    const goToItem = (i) => setPage(i);

    const resizeCarousel = () => goToItem(page);

    useEffect(() => {
        window.addEventListener('resize', resizeCarousel);
        return () => window.removeEventListener('resize', resizeCarousel);
    }, []);

    const determineClosestPage = () => {
        const imageWidth = carouselContainer.current.offsetWidth;
        // don't allow page to be 0 based (min page is 1)
        // also we need to use the negative of the X position because the translation that occurred
        // was negative, but our pages are positive
        const dragPage = Math.round((currentX.current * -1) / imageWidth) + 1;
        console.log(' Drag Page : ', dragPage);
        if (dragPage > items.length) {
            return items.length;
        }
        else if (dragPage < 1) {
            return 1;
        }
        return dragPage;
    };

    useEffect(() => {
        if (!isDragging) {
            goToItem(determineClosestPage());
        }
    }, [isDragging]);

    useEffect(() => {
        if (carouselList.current && carouselContainer.current) {
            const imageWidth = carouselContainer.current.offsetWidth;
            const offset = (page - 1) * imageWidth * -1;
            currentX.current = offset;
            carouselList.current.style.transform = `translate(${offset}px, 0px)`;
        }
    }, [page]);

    const touchedCarousel = () => setIsDragging(true);

    const commonDragCompletion = () => {
        lastDragX.current = null;
        setIsDragging(false);
    };

    const untouchedCarousel = () => commonDragCompletion();

    const commonDragLogic = (xPos) => {
        // determine how much we have moved the cursor
        const change = xPos - lastDragX.current;
        lastDragX.current = xPos;

        // change the carousel translation by the same amount
        currentX.current += change;
        carouselList.current.style.transform = `translate(${currentX.current}px, 0px)`;
    };

    const touchDraggedCarousel = (e) => {
        if (!isDragging || !e.touches || !e.touches.length || !carouselList) {
            return;
        }
        // arbitrarily just go with the first touch
        const firstTouch = e.touches[0];
        if (lastDragX.current === null) {
            // this is the first drag event
            lastDragX.current = firstTouch.pageX;
        }
        else {
            commonDragLogic(firstTouch.pageX);
        }
    };

    const startedMouseDrag = (e) => {
        // stop the browser from trying to drag the image for saving
        // or whatever native drag behavior
        e.preventDefault();
        setIsDragging(true);
    };

    const stoppedMouseDrag = () => {
        if (!isDragging) {
            return;
        }
        commonDragCompletion();
    };

    const performedMouseDrag = (e) => {
        if (!isDragging) {
            return;
        }

        if (lastDragX.current === null) {
            // this is the first drag event
            lastDragX.current = e.pageX;
        }
        else {
            commonDragLogic(e.pageX);
        }
    };

    const clickedDot = (e) => {
        e.preventDefault();
        goToItem(parseInt(e.target.value, 10));
    };

    return (
        <div
            className="feature-carousel"
            aria-describedby={`${instanceId}-instructions`}>
            <div
                id={`${instanceId}-instructions`}
                className="feature-carousel__instructions"
                aria-live="polite">
                An image carousel containing {`${items.length} item${items.length !== 1 ? 's' : ''}`}, with item {page} shown.
            </div>
            <div className="feature-carousel-content">
                <div
                    className="feature-carousel-image"
                    onTouchStart={touchedCarousel}
                    onTouchMove={touchDraggedCarousel}
                    onTouchEnd={untouchedCarousel}
                    onTouchCancel={untouchedCarousel}
                    onMouseDown={startedMouseDrag}
                    onMouseUp={stoppedMouseDrag}
                    onMouseLeave={stoppedMouseDrag}
                    onMouseMove={performedMouseDrag}
                    role="presentation"
                    ref={carouselContainer}>
                    <ul
                        className={`feature-carousel-image__list ${isDragging ? 'feature-carousel-image__list_dragging' : ''}`}
                        aria-live="polite"
                        ref={carouselList}>
                        {
                            items.map((item, i) => (
                                <li
                                    className="feature-carousel-image__list-item"
                                    key={uniqueId()}
                                    aria-hidden={page !== i + 1}
                                    tabIndex={-1}>
                                    {cloneElement(item, { className: 'feature-carousel-image__image' })}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className="feature-carousel-pager">
                <div
                    className="feature-carousel-pager__list"
                    role="menu"
                    aria-label="Pagination controls for carousel items">
                    {
                        items.map((item, i) => (
                            <button
                                className={`feature-carousel-pager__dot-button ${i + 1 === page ? 'feature-carousel-pager__dot-button_active' : ''}`}
                                value={i + 1}
                                key={uniqueId()}
                                onClick={clickedDot}
                                aria-label={`Skip to carousel item ${i + 1}`}
                                aria-checked={i + 1 === page}
                                role="menuitemradio">
                                <div className="feature-carousel-pager__dot-decorator" />
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

Carousel.propTypes = propTypes;
export default Carousel;
