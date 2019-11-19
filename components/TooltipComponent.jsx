import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import "../styles/components/_tooltipComponent.scss";

const propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
};

const defaultProps = {
    title: "Tooltip Info",
    children: <p>Here is some info.</p>,
    className: null
};

// eslint-disable-next-line import/prefer-default-export
export const TooltipComponent = (props) => (
    <div className={cx({ [props.className]: props.className !== null })}>
        <h1 className="tooltip__title">{props.title}</h1>
        <div className="tooltip__text">
            {props.children}
        </div>
    </div>
);

TooltipComponent.propTypes = propTypes;
TooltipComponent.defaultProps = defaultProps;
