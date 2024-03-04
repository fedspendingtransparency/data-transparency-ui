import React from 'react';
import PropTypes from 'prop-types';
import TooltipWrapper from './infoTooltip/TooltipWrapper';

require('../styles/components/_sectionHeader.scss');

function SectionHeader({
    icon, title, overLine, description, titleTooltip, descTooltip
}) {
    return (
        <div className="usda-section-title__sectionHeader">
            {icon && React.cloneElement(icon, { className: 'usda-section-title__title-icon' })}
            <div className="usda-section-title__header">
                {overLine && <strong className="usda-section-title__overline">{overLine}</strong>}
                <div className="usda-section-title__title">
                    <h3>
                        {title}
                    </h3>
                    {titleTooltip.component && (
                        <TooltipWrapper
                            tooltipComponent={titleTooltip.component}
                            icon="info"
                            className={`${overLine ? 'has-overline' : ''}`}
                            {...titleTooltip.props} />
                    )}
                </div>
            </div>
            {description && React.cloneElement(description, { className: 'usda-section-title__desc has-overline' })}
            {descTooltip.component && (
                <TooltipWrapper
                    tooltipComponent={descTooltip.component}
                    icon="info"
                    tooltipPosition="left"
                    {...descTooltip.props} />
            )}
        </div>
    );
}

SectionHeader.propTypes = {
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    overLine: PropTypes.string,
    description: PropTypes.element,
    titleTooltip: PropTypes.shape({
        component: PropTypes.element,
        props: PropTypes.object
    }),
    descTooltip: PropTypes.shape({
        component: PropTypes.element,
        props: PropTypes.object
    })
};

export default SectionHeader;
