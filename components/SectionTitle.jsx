import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TooltipWrapper from './infoTooltip/TooltipWrapper';
import ComingSoon from './messages/ComingSoon';
import { createOnKeyDownHandler } from '../helpers/keyboardEventsHelper';

require('../styles/components/_sectionTitle.scss');

const defaultControlledProps = {
    isControlled: false,
    toggleExpand: () => { },
    isExpanded: false
};

function SectionTitle({
    title,
    icon,
    children,
    id = '',
    classNames = '',
    isCollapsible = false,
    isComingSoon = false,
    controlledProps = defaultControlledProps,
    defaultExpandedState = true,
    overLine = "",
    titleTooltip = {
        tooltip: null,
        tooltipProps: {}
    },
    descTooltip = {
        component: null,
        props: {}
    },
    description
}) {
    const [isExpanded, setExpanded] = useState(defaultExpandedState);
    const toggleExpand = () => {
        if (controlledProps.isControlled) {
            controlledProps.toggleExpand();
        }
        else {
            setExpanded(!isExpanded);
        }
    };
    const showChildren = (isExpanded || (controlledProps.isControlled && controlledProps.isExpanded) || !isCollapsible);

    return (
        <section id={id} className={`usda-section__container${classNames ? ` ${classNames}` : ''}`}>
            <div className="usda-section-title__container">
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
                {isCollapsible && (
                    <FontAwesomeIcon
                        tabIndex={0}
                        onKeyDown={createOnKeyDownHandler(toggleExpand)}
                        className="usda-section-title__expand-icon"
                        onClick={toggleExpand}
                        size="2x"
                        icon={(isExpanded || (controlledProps.isControlled && controlledProps.isExpanded)) ? "chevron-up" : "chevron-down"} />
                )}
            </div>
            <hr />
            {isComingSoon && showChildren && <ComingSoon />}
            {showChildren && !isComingSoon && children}
        </section>
    );
}

SectionTitle.propTypes = {
    icon: PropTypes.element.isRequired,
    children: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    defaultExpandedState: PropTypes.bool,
    overLine: PropTypes.string,
    controlledProps: PropTypes.shape({
        isControlled: PropTypes.bool.isRequired,
        toggleExpand: PropTypes.func.isRequired,
        isExpanded: PropTypes.bool.isRequired
    }),
    description: PropTypes.element,
    titleTooltip: PropTypes.shape({
        component: PropTypes.element,
        props: PropTypes.object
    }),
    descTooltip: PropTypes.shape({
        component: PropTypes.element,
        props: PropTypes.object
    }),
    isCollapsible: PropTypes.bool,
    isComingSoon: PropTypes.bool,
    classNames: PropTypes.string,
    id: PropTypes.string
};

export default SectionTitle;
