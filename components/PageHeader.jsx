import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import { useDynamicStickyClass } from '../helpers/pageHeaderHelper';
import ShareIcon from './ShareIcon';
import DownloadIconButton from './DownloadIconButton';
import FiscalYearPicker from './FiscalYearPicker';

require('../styles/components/_section-title.scss');

const ToolBar = ({
    fyProps,
    downloadProps,
    shareProps,
    classNames
}) => (
    <div className={classNames}>
        {/* FY Picker */}
        {!isEmpty(fyProps) && <FiscalYearPicker {...fyProps} />}
        {/* Share Icon */}
        {!isEmpty(shareProps) && <ShareIcon {...shareProps} />}
        {/* Download Icon */}
        {!isEmpty(downloadProps) && <DownloadIconButton {...downloadProps} />}
    </div>
);

ToolBar.propTypes = {
    classNames: PropTypes.string,
    fyProps: PropTypes.shape({
        selectedFy: PropTypes.number.isRequired,
        latestFy: PropTypes.number.isRequired,
        handleFyChange: PropTypes.func.isRequired
    }),
    shareProps: PropTypes.shape({
        url: PropTypes.string.isRequired,
        classNames: PropTypes.string,
        onShareOptionClick: PropTypes.func.isRequired
    }),
    downloadProps: PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        downloadInFlight: PropTypes.bool.isRequired,
        hoverComponent: PropTypes.element
    })
};

const PageHeader = ({
    title,
    children,
    id = '',
    classNames = '',
    overLine = "",
    fyProps,
    shareProps,
    downloadProps,
    stickyBreakPoint = 0
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

    const showToolbar = (
        !isEmpty(fyProps) ||
        !isEmpty(shareProps) ||
        !isEmpty(downloadProps)
    );

    return (
        <main id={id} className={`usda-page__container${classNames ? ` ${classNames}` : ''}`}>
            <section className={`usda-page-header${stickyClass}`} ref={stickyHeader}>
                <div className="usda-page-header__container">
                    <div className="usda-page-header__header">
                        {overLine && <strong className="usda-page-header__overline">{overLine}</strong>}
                        <div className="usda-page-header__title">
                            <h1>{title}</h1>
                        </div>
                    </div>
                    {showToolbar && React.cloneElement(<ToolBar />, {
                        classNames: 'usda-page-header__toolbar',
                        fyProps,
                        shareProps,
                        downloadProps
                    })}
                </div>
            </section>
            {children}
        </main>
    );
};

PageHeader.propTypes = {
    id: PropTypes.string,
    classNames: PropTypes.string,
    stickyBreakPoint: PropTypes.number,
    overLine: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
    fyProps: PropTypes.shape({
        selectedFy: PropTypes.number.isRequired,
        latestFy: PropTypes.number.isRequired,
        handleFyChange: PropTypes.func.isRequired
    }),
    shareProps: PropTypes.shape({
        url: PropTypes.string.isRequired,
        classNames: PropTypes.string,
        onShareOptionClick: PropTypes.func.isRequired
    }),
    downloadProps: PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        downloadInFlight: PropTypes.bool.isRequired,
        hoverComponent: PropTypes.element
    })
};

export default PageHeader;
