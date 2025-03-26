import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import '../../styles/components/infoTooltip/_tooltipComponent.scss';

const propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    textAlign: PropTypes.shape({
        title: PropTypes.oneOf(["center", "left"]),
        text: PropTypes.oneOf(["center", "left"])
    })
};

// eslint-disable-next-line import/prefer-default-export
const TooltipComponent = ({
    children,
    title,
    className = null,
    textAlign = {
        title: 'left',
        text: 'left'
    }
}) => (
    <div className={cx({ [className]: className !== null })}>
        <h1 className={cx("tooltip__title", textAlign.title)}>{title}</h1>
        <div className={cx("tooltip__text", textAlign.text)}>
            {children}
        </div>
    </div>
);

TooltipComponent.propTypes = propTypes;
export default TooltipComponent;
