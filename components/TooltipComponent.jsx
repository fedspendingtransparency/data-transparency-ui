import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import "../styles/components/_tooltipComponent.scss";

const propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    textAlign: PropTypes.shape({
        title: PropTypes.oneOf(["center", "left"]),
        text: PropTypes.oneOf(["center", "left"])
    })
};

const defaultProps = {
    title: "Tooltip Info",
    children: <p>Here is some info.</p>,
    className: null,
    textAlign: {
        title: 'left',
        text: 'left'
    }
};

// eslint-disable-next-line import/prefer-default-export
const TooltipComponent = ({
    children,
    title,
    className,
    textAlign
}) => (
    <div className={cx({ [className]: className !== null })}>
        <h1 className={cx("tooltip__title", textAlign.title)}>{title}</h1>
        <div className={cx("tooltip__text", textAlign.text)}>
            {children}
        </div>
    </div>
);

TooltipComponent.propTypes = propTypes;
TooltipComponent.defaultProps = defaultProps;

export default TooltipComponent;
