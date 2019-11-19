import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import "../styles/components/_tooltipComponent.scss";

const propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    textAlign: PropTypes.oneOf(['left', 'center'])
};

const defaultProps = {
    title: "Tooltip Info",
    children: <p>Here is some info.</p>,
    className: null,
    textAlign: 'left'
};

// eslint-disable-next-line import/prefer-default-export
const TooltipComponent = ({
    children,
    title,
    className,
    textAlign
}) => (
    <div className={cx({ [className]: className !== null })}>
        <h1 className="tooltip__title">{title}</h1>
        <div className={cx("tooltip__text", textAlign)}>
            {children}
        </div>
    </div>
);

TooltipComponent.propTypes = propTypes;
TooltipComponent.defaultProps = defaultProps;

export default TooltipComponent;
