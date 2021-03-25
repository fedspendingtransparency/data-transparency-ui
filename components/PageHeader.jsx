
import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import ShareIcon from './ShareIcon';
import DownloadIconButton from './DownloadIconButton';
import FiscalYearPicker from './FiscalYearPicker';

require('../styles/components/_section-title.scss');

const ToolBar = ({
    fyProps = {},
    downloadProps = {},
    shareProps = {},
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
        slug: PropTypes.string.isRequired,
        email: PropTypes.shape({
            subject: PropTypes.string.isRequired,
            body: PropTypes.string
        }).isRequired,
        classNames: PropTypes.string.isRequired
    }),
    downloadProps: PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        downloadInFlight: PropTypes.bool.isRequired,
        hoverComponent: PropTypes.element
    })
};

const PageTitle = ({
    title,
    children,
    id = '',
    classNames = '',
    overLine = "",
    fyProps = {},
    shareProps = {},
    downloadProps = {}
}) => {
    const showToolbar = (
        !isEmpty(fyProps) ||
        !isEmpty(shareProps) ||
        !isEmpty(downloadProps)
    );
    return (
        <main id={id} className={`usda-page__container${classNames ? ` ${classNames}` : ''}`}>
            <section className={`usda-page-header`}>
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

PageTitle.propTypes = {
    id: PropTypes.string,
    classNames: PropTypes.string,
    stickyBreakPoint: PropTypes.number,
    overLine: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    fyProps: PropTypes.shape({
        selectedFy: PropTypes.number.isRequired,
        latestFy: PropTypes.number.isRequired,
        handleFyChange: PropTypes.func.isRequired
    }),
    shareProps: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        email: PropTypes.shape({
            subject: PropTypes.string.isRequired,
            body: PropTypes.string
        }).isRequired,
        classNames: PropTypes.string.isRequired
    }),
    downloadProps: PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        downloadInFlight: PropTypes.bool.isRequired,
        hoverComponent: PropTypes.element
    })
};

export default PageTitle;
