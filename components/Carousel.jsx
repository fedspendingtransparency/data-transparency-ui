// /**
//  * Carousel.jsx
//  * Created by Kevin Li 1/22/18
//  */

import React, { cloneElement, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

require('../styles/components/_carousel.scss');

const propTypes = {
    items: PropTypes.arrayOf(PropTypes.element)
};

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
        if (dragPage > items.length) {
            return 1;
        }
        else if (dragPage < 1) {
            return items.length;
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
    });

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
            className="usa-dt-carousel"
            aria-describedby={`${instanceId.current}-instructions`}>
            <div
                id={`${instanceId.current}-instructions`}
                className="usa-dt-carousel__instructions"
                aria-live="polite">
                An image carousel containing {`${items.length} item${items.length !== 1 ? 's' : ''}`}, with item {page} shown.
            </div>
            <div className="usa-dt-carousel-content">
                <div
                    className="usa-dt-carousel-item"
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
                    <div
                        className={`usa-dt-carousel-item__list ${isDragging ? 'usa-dt-carousel-item__list_dragging' : ''}`}
                        aria-live="polite"
                        ref={carouselList}>
                        {
                            items.map((item, i) => (
                                <div
                                    className="usa-dt-carousel-item__list-item"
                                    key={`${i}-the-list-item`}
                                    aria-hidden={page !== i + 1}
                                    tabIndex={-1}>
                                    {cloneElement(item, { className: 'usa-dt-carousel-item__item' })}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="usa-dt-carousel-pager">
                <div
                    className="usa-dt-carousel-pager__list"
                    role="menu"
                    aria-label="Pagination controls for carousel items">
                    {
                        items.map((item, i) => (
                            <button
                                className={`usa-dt-carousel-pager__dot-button ${i + 1 === page ? 'usa-dt-carousel-pager__dot-button_active' : ''}`}
                                value={i + 1}
                                key={`${i}-list-item`}
                                onClick={clickedDot}
                                aria-label={`Skip to carousel item ${i + 1}`}
                                aria-checked={i + 1 === page}
                                role="menuitemradio">
                                <div className="usa-dt-carousel-pager__dot-decorator" />
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
