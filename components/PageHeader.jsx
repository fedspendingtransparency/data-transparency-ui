import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useDynamicStickyClass } from '../helpers/pageHeaderHelper';

require('../styles/components/_pageHeader.scss');

const PageHeader = ({
    title,
    overLine = "",
    stickyBreakPoint = 0,
    toolBar = [],
    backgroundColor = '#1a4480'
}) => {
    const stickyHeader = useRef(null);
    const [
        isSticky,
        ,
        ,
        handleScroll,
        measureScreen
    ] = useDynamicStickyClass(stickyHeader, stickyBreakPoint);

    useEffect(() => {
        measureScreen();
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', measureScreen);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', measureScreen);
        };
    });

    const stickyClass = isSticky ? ' usda-page-header--sticky' : '';

    const renderMobileShareIcon = () => {
        const shareIcon = toolBar.find((o) => o.type.displayName === 'Share Icon');
        if (shareIcon) {
            return React.cloneElement(shareIcon);
        }
        return null;
    };

    return (
        <section className={`usda-page-header${stickyClass}`} ref={stickyHeader} style={{backgroundColor: backgroundColor}}>
            <div className="usda-page-header__container">
                <div className="usda-page-header__mobile-top">
                    <div className="usda-page-header__header">
                        {overLine && <strong className="usda-page-header__overline">{overLine}</strong>}
                        <div className="usda-page-header__title">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    {renderMobileShareIcon()}
                </div>
                {toolBar?.length > 0 && (
                    <div className="usda-page-header__toolbar">
                        {toolBar.map((component) => {
                            const className = `${component.props?.className} ${component.props?.classNames}`;
                            const classNames = `${component.props?.classNames}`;
                            if (className) {
                                return React.cloneElement(component, {
                                    className: `${className} toolbar__item`
                                });
                            }
                            if (classNames) {
                                return React.cloneElement(component, {
                                    classNames: `${classNames} toolbar__item`
                                });
                            }
                            return React.cloneElement(component, {
                                className: `toolbar__item`,
                                classNames: `toolbar__item`
                            });
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

PageHeader.propTypes = {
    stickyBreakPoint: PropTypes.number,
    overLine: PropTypes.string,
    title: PropTypes.string.isRequired,
    toolBar: PropTypes.arrayOf(PropTypes.element)
};

export default PageHeader;
