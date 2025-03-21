/**
 * Tooltip.jsx
 * Created by Lizzie Salita 3/8/19
 */

import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { throttle, uniqueId } from "lodash";
import cx from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

require('../../styles/components/infoTooltip/_tooltipWrapper.scss');

const propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
    tooltipComponent: PropTypes.element,
    tooltipPosition: PropTypes.string,
    wide: PropTypes.bool,
    icon: PropTypes.string,
    width: PropTypes.number,
    controlledProps: PropTypes.shape({
        isControlled: PropTypes.bool,
        showTooltip: PropTypes.func,
        closeTooltip: PropTypes.func,
        isVisible: PropTypes.bool
    }),
    offsetAdjustments: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        left: PropTypes.number
    }),
    styles: PropTypes.object,
    onMouseMoveTooltip: PropTypes.func,
    onMouseLeaveTooltip: PropTypes.func
};

const baseTooltipWidth = 375;

const TooltipWrapper = ({
    className = null,
    children = null,
    tooltipComponent = null,
    tooltipPosition = 'right',
    wide = false,
    icon = "",
    width = baseTooltipWidth,
    controlledProps = ({
        isControlled: false,
        showTooltip: () => {},
        closeTooltip: () => {},
        isVisible: false
    }),
    offsetAdjustments = ({
        top: -15, // So that the arrow points at the middle of the tooltip trigger area 👌
        right: 0, // InfoToolTip offset
        left: 0
    }),
    styles = {},
    onMouseMoveTooltip: propOnMouseMoveTooltip,
    onMouseLeaveTooltip: propOnMouseLeaveTooltip
}) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isHoveringOnTooltip, setIsHoveringOnTooltip] = useState(false);

    const tooltipContainer = useRef();
    const arrowDirection = useRef('');
    const spacerStyle = useRef({});

    const horizontalPadding = 5;
    const tooltipIcons = {
        info: <FontAwesomeIcon className="tooltip__icon" icon="info-circle" />
    };
    const elId = uniqueId('dtui-tt_');

    const onMouseMoveTooltip = () => {
        if (propOnMouseMoveTooltip) {
            propOnMouseMoveTooltip();
        }
        else if (controlledProps.isControlled) {
            controlledProps.showTooltip();
        }
        else if (!isHoveringOnTooltip) {
            setIsHoveringOnTooltip(true);
        }
    };

    const onMouseLeaveTooltip = () => {
        if (propOnMouseLeaveTooltip) {
            propOnMouseLeaveTooltip();
        }
        else if (isHoveringOnTooltip) {
            setIsHoveringOnTooltip(false);
        }
    };

    const getAvailableHorizontalSpace = () => {
        const totalSpace = window.innerWidth;
        const {
            offsetLeft: tooltipContainerLeftPosition,
            clientWidth: tooltipContainerWidth
        } = tooltipContainer.current;
        const spaceToRight = (totalSpace - tooltipContainerLeftPosition) - tooltipContainerWidth;
        const spaceToLeft = tooltipContainerLeftPosition;
        return { right: spaceToRight, left: spaceToLeft, total: totalSpace };
    };

    const getTooltipWidth = () => {
        const { right: spaceToRight, left: spaceToLeft, total } = getAvailableHorizontalSpace();
        const greatestSpace = spaceToRight > spaceToLeft
            ? spaceToRight
            : spaceToLeft;
        if (total < 425) {
            // mobile tooltip stylez
            return total - (horizontalPadding * 2);
        }
        if (tooltipPosition === 'bottom') {
            return width;
        }
        if (wide) {
            return (greatestSpace > 800)
                ? 700
                : greatestSpace - horizontalPadding;
        }
        return width;
    };

    const getDimensionsForMobile = (isMobile, widthVar) => {
        if (isMobile) {
            // 8px being 1/2 the height of the arrow.
            const top = `${tooltipContainer.current.clientHeight + tooltipContainer.current.offsetTop + 8}px`;
            return {
                top,
                widthVar,
                // 1/2 the width of the arrow
                left: `${(tooltipContainer.current.clientWidth / 2) - 8}px`
            };
        }
        return {
            ...spacerStyle.current,
            widthVar
        };
    };

    const setTooltipDimensions = () => {
        const shouldOverridePositioning = Object.keys(styles).includes('transform');

        if (shouldOverridePositioning && tooltipContainer.current) {
            if (tooltipPosition === 'bottom') {
                // make sure we set  the arrow styles if the positioning is being overridden.
                arrowDirection.current = 'bottom';
                spacerStyle.current = ({
                    width: getTooltipWidth()
                });
            }
            else {
                // position is being overridden
                spacerStyle.current = ({
                    width: getTooltipWidth()
                });
            }
        }
        else if (tooltipContainer.current) {
            const tooltipWidth = getTooltipWidth();

            const { left: spaceToLeft, total, right: spaceToRight } = getAvailableHorizontalSpace();
            const offsetTopCalc = tooltipContainer.current.offsetTop + offsetAdjustments.top;
            const isMobile = total < 700;
            if (tooltipPosition === 'bottom' || isMobile) {
                arrowDirection.current = 'bottom';
                spacerStyle.current = ({ ...getDimensionsForMobile(isMobile, tooltipWidth) });
            }
            else if (tooltipPosition === 'right' && spaceToRight < tooltipWidth) {
                // going left b/c cant go right
                const startingPositionLeft = (spaceToLeft - tooltipWidth)
                    + tooltipContainer.current.clientWidth;

                arrowDirection.current = 'smart-bottom-left';
                spacerStyle.current = ({
                    top: tooltipContainer.current.offsetTop
                        + 16
                        + tooltipContainer.current.clientHeight,
                    // 20px of padding for the arrow
                    left: startingPositionLeft + 20,
                    width: tooltipWidth
                });
            }
            else if (tooltipPosition === 'left' && spaceToLeft < tooltipWidth) {
                // going right b/c cant go left
                arrowDirection.current = 'smart-bottom-right';
                spacerStyle.current = ({
                    top: tooltipContainer.current.offsetTop + 16 + tooltipContainer.current.clientHeight,
                    // 20px of padding for the arrow
                    left: spaceToLeft - 20,
                    width: tooltipWidth
                });
            }
            else if (tooltipPosition === 'left') {
                // minus tooltipWidth b/c right corner of toolTip is flush w/ left edge of toolTip container
                const startingPositionLeft = spaceToLeft - tooltipWidth;

                arrowDirection.current = 'right';
                spacerStyle.current = ({
                    top: offsetTopCalc,
                    left: startingPositionLeft - horizontalPadding,
                    width: tooltipWidth
                });
            }
            else {
                // plus ttContainerWidth b/c left corner of toolTip is flush w/ right edge of toolTip container
                const startingPositionLeft = spaceToLeft + tooltipContainer.current.clientWidth;

                arrowDirection.current = 'left';
                spacerStyle.current = ({
                    top: offsetTopCalc,
                    left: startingPositionLeft + horizontalPadding,
                    width: tooltipWidth
                });
            }
        }
    };

    const showTooltipFunc = () => {
        if (controlledProps.isControlled) {
            controlledProps.showTooltip();
        }
        else if (!showTooltip) {
            setShowTooltip(true);
        }
    };

    const closeTooltip = () => {
        if (controlledProps.isControlled) {
            controlledProps.closeTooltip();
        }
        else if (showTooltip) {
            setShowTooltip(false);
        }
    };

    const showTooltipBool = (
        (controlledProps.isControlled && controlledProps.isVisible)
        || showTooltip
        || isHoveringOnTooltip
    );

    let tooltip = null;

    if (showTooltipBool) {
        tooltip = (
            <div className="tooltip-spacer" style={spacerStyle.current}>
                <div
                    className="tooltip"
                    id="tooltip"
                    role="tooltip"
                    onMouseEnter={onMouseMoveTooltip}
                    onMouseMove={onMouseMoveTooltip}
                    onMouseLeave={onMouseLeaveTooltip}>
                    <div
                        className="tooltip__interior">
                        <div className={`tooltip-pointer ${arrowDirection.current}`} />
                        <div className="tooltip__content">
                            <div className="tooltip__message">
                                {tooltipComponent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    useEffect(() => {
        window.addEventListener("scroll", throttle(setTooltipDimensions, 500));
        window.addEventListener("resize", throttle(setTooltipDimensions, 100));

        if (!controlledProps.isControlled) {
            document?.getElementById(elId)?.addEventListener(
                'mousemove', throttle(setTooltipDimensions, 500)
            );
        }

        return () => {
            window.removeEventListener("scroll", setTooltipDimensions);
            window.removeEventListener("resize", setTooltipDimensions);

            if (!controlledProps.isControlled) {
                document?.getElementById(elId)
                    ?.addEventListener('mousemove', setTooltipDimensions);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTooltipDimensions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tooltipContainer.current]);

    return (
        <div
            id={elId}
            className={cx({ 'tooltip-wrapper': true, [className]: className !== null })}
            style={styles}>
            <div
                ref={(div) => {
                    tooltipContainer.current = div;
                }}>
                <div
                    role="button"
                    tabIndex="0"
                    aria-label="Tooltip Hover Wrapper"
                    className="tooltip__hover-wrapper"
                    onBlur={closeTooltip}
                    onFocus={showTooltipFunc}
                    onKeyPress={showTooltipFunc}
                    onMouseEnter={showTooltipFunc}
                    onMouseLeave={closeTooltip}
                    onClick={showTooltipFunc}>
                    {children}
                    {icon && tooltipIcons[icon]}
                </div>
                {tooltip}
            </div>
        </div>
    );
};

TooltipWrapper.propTypes = propTypes;
export default TooltipWrapper;
