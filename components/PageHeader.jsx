
import React from 'react';
import PropTypes from 'prop-types';

require('../styles/components/_section-title.scss');

const PageTitle = ({
    title,
    children,
    id = '',
    classNames = '',
    overLine = ""
}) => (
    <main id={id} className={`usda-page__container${classNames ? ` ${classNames}` : ''}`}>
        <section className="usda-page-title__container">
            <div className="usda-page-title__header">
                {overLine && <strong className="usda-page-title__overline">{overLine}</strong>}
                <div className="usda-page-title__title">
                    <h1>{title}</h1>
                </div>
            </div>
        </section>
        {children}
    </main>
);

PageTitle.propTypes = {
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    overLine: PropTypes.string,
    classNames: PropTypes.string,
    id: PropTypes.string
};

export default PageTitle;
