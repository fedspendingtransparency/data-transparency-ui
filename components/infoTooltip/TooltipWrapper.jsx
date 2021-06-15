/**
 * Tooltip.jsx
 * Created by Lizzie Salita 3/8/19
 */

import React from "react";
import PropTypes from "prop-types";
import { throttle } from "lodash";
import cx from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

require('../../styles/components/infoTooltip/_tooltipWrapper.scss');

const horizontalPadding = 5;
const baseTooltipWidth = 375;

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

const defaultProps = {
    className: null,
    children: null,
    toolTipComponent: null,
    tooltipPosition: 'right',
    wide: false,
    icon: "",
    controlledProps: {
        isControlled: false,
        showTooltip: () => {},
        closeTooltip: () => {},
        isVisible: false
    },
    width: baseTooltipWidth,
    offsetAdjustments: {
        top: -15, // So that the arrow points at the middle of the tooltip trigger area 👌
        right: 0, // InfoToolTip offset
        left: 0
    },
    styles: {}
};

const tooltipIcons = {
    info: <FontAwesomeIcon className="tooltip__icon" icon="info-circle" />
};
export default class TooltipWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showTooltip: false,
            isHoveringOnTooltip: false,
            offsetTop: 0,
            arrowDirection: 'left',
            spacerStyles: {}
        };

        this.showTooltip = this.showTooltip.bind(this);
        this.closeTooltip = this.closeTooltip.bind(this);
        this.setTooltipDimensions = throttle(this.setTooltipDimensions.bind(this), 16);
    }

    componentDidMount() {
        this.setTooltipDimensions();
        window.addEventListener("scroll", throttle(this.setTooltipDimensions, 500));
        window.addEventListener("resize", throttle(this.setTooltipDimensions, 100));
    }

    componentDidUpdate() {
        this.setTooltipDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.setTooltipDimensions);
        window.removeEventListener("resize", this.setTooltipDimensions);
    }

    onMouseMoveTooltip = () => {
        if (this.props.onMouseMoveTooltip) {
            this.props.onMouseMoveTooltip();
        }
        else if (this.props.controlledProps.isControlled) {
            this.props.controlledProps.showTooltip();
        }
        else if (!this.state.isHoveringOnTooltip) {
            this.setState({ isHoveringOnTooltip: true });
        }
    }

    onMouseLeaveTooltip = () => {
        if (this.props.onMouseLeaveTooltip) {
            this.props.onMouseLeaveTooltip();
        }
        else if (this.state.isHoveringOnTooltip) {
            this.setState({ isHoveringOnTooltip: false });
        }
    }

    getAvailableHorizontalSpace() {
        const totalSpace = window.innerWidth;
        const {
            offsetLeft: tooltipContainerLeftPosition,
            clientWidth: tooltipContainerWidth
        } = this.tooltipContainer;
        const spaceToRight = (totalSpace - tooltipContainerLeftPosition) - tooltipContainerWidth;
        const spaceToLeft = tooltipContainerLeftPosition;
        return { right: spaceToRight, left: spaceToLeft, total: totalSpace };
    }

    getTooltipWidth = () => {
        const { right: spaceToRight, left: spaceToLeft, total } = this.getAvailableHorizontalSpace();
        const greatestSpace = spaceToRight > spaceToLeft
            ? spaceToRight
            : spaceToLeft;
        if (total < 425) {
            // mobile tooltip stylez
            return total - (horizontalPadding * 2);
        }
        else if (this.props.tooltipPosition === 'bottom') {
            return this.props.width;
        }
        else if (this.props.wide) {
            return (greatestSpace > 800)
                ? 700
                : greatestSpace - horizontalPadding;
        }
        return this.props.width;
    };

    getDimensionsForMobile = (isMobile, width) => {
        if (isMobile) {
            // 8px being 1/2 the height of the arrow.
            const top = `${this.tooltipContainer.clientHeight + this.tooltipContainer.offsetTop + 8}px`;
            return {
                top,
                width,
                // 1/2 the width of the arrow
                left: `${(this.tooltipContainer.clientWidth / 2) - 8}px`
            };
        }
        return {
            ...this.state.spacerStyles,
            width
        };
    }

    setTooltipDimensions() {
        const shouldOverridePositioning = Object.keys(this.props.styles).includes('transform');
        if (shouldOverridePositioning && this.tooltipContainer) {
            if (this.props.tooltipPosition === 'bottom') {
                // make sure we set  the arrow styles if the positioning is being overridden.
                this.setState({
                    arrowDirection: 'bottom',
                    spacerStyle: {
                        width: this.getTooltipWidth()
                    }
                });
            }
            else {
                // position is being overridden
                this.setState({
                    spacerStyle: {
                        width: this.getTooltipWidth()
                    }
                });
            }
        }
        else if (this.tooltipContainer) {
            const tooltipWidth = this.getTooltipWidth();

            const { left: spaceToLeft, total, right: spaceToRight } = this.getAvailableHorizontalSpace();
            const offsetTop = this.tooltipContainer.offsetTop + this.props.offsetAdjustments.top;
            const isMobile = total < 700;
            if (this.props.tooltipPosition === 'bottom' || isMobile) {
                this.setState({
                    arrowDirection: 'bottom',
                    spacerStyle: {
                        ...this.getDimensionsForMobile(isMobile, tooltipWidth)
                    }
                });
            }
            else if (this.props.tooltipPosition === 'right' && spaceToRight < tooltipWidth) {
                // going left b/c cant go right
                const startingPositionLeft = (spaceToLeft - tooltipWidth) + this.tooltipContainer.clientWidth;
                this.setState({
                    arrowDirection: 'smart-bottom-left',
                    spacerStyle: {
                        top: this.tooltipContainer.offsetTop + 16 + this.tooltipContainer.clientHeight,
                        // 20px of padding for the arrow
                        left: startingPositionLeft + 20,
                        width: tooltipWidth
                    }
                });
            }
            else if (this.props.tooltipPosition === 'left' && spaceToLeft < tooltipWidth) {
                // going right b/c cant go left
                const startingPositionLeft = spaceToLeft;
                this.setState({
                    arrowDirection: 'smart-bottom-right',
                    spacerStyle: {
                        top: this.tooltipContainer.offsetTop + 16 + this.tooltipContainer.clientHeight,
                        // 20px of padding for the arrow
                        left: startingPositionLeft - 20,
                        width: tooltipWidth
                    }
                });
            }
            else if (this.props.tooltipPosition === 'left') {
                const startingPositionLeft = spaceToLeft - tooltipWidth; // minus tooltipWidth b/c right corner of toolTip is flush w/ left edge of toolTip container
                this.setState({
                    arrowDirection: 'right',
                    spacerStyle: {
                        top: offsetTop,
                        left: startingPositionLeft - horizontalPadding,
                        width: tooltipWidth
                    }
                });
            }
            else {
                const startingPositionLeft = spaceToLeft + this.tooltipContainer.clientWidth; // plus ttContainerWidth b/c left corner of toolTip is flush w/ right edge of toolTip container
                this.setState({
                    arrowDirection: 'left',
                    spacerStyle: {
                        top: offsetTop,
                        left: startingPositionLeft + horizontalPadding,
                        width: tooltipWidth
                    }
                });
            }
        }
    }


    showTooltip() {
        if (this.props.controlledProps.isControlled) {
            this.props.controlledProps.showTooltip();
        }
        else if (!this.state.showTooltip) {
            this.setState({
                showTooltip: true
            });
        }
    }

    closeTooltip() {
        if (this.props.controlledProps.isControlled) {
            this.props.controlledProps.closeTooltip();
        }
        else if (this.state.showTooltip) {
            this.setState({
                showTooltip: false
            });
        }
    }

    render() {
        const showTooltip = (
            (this.props.controlledProps.isControlled && this.props.controlledProps.isVisible) ||
            this.state.showTooltip ||
            this.state.isHoveringOnTooltip
        );
        let tooltip = null;

        if (showTooltip) {
            tooltip = (
                <div className="tooltip-spacer" style={this.state.spacerStyle}>
                    <div
                        className="tooltip"
                        id="tooltip"
                        role="tooltip"
                        onMouseEnter={this.onMouseMoveTooltip}
                        onMouseMove={this.onMouseMoveTooltip}
                        onMouseLeave={this.onMouseLeaveTooltip}
                        ref={(div) => {
                            this.tooltipReference = div;
                        }}>
                        <div
                            className="tooltip__interior">
                            <div className={`tooltip-pointer ${this.state.arrowDirection}`} />
                            <div className="tooltip__content">
                                <div className="tooltip__message">
                                    {this.props.tooltipComponent}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return (
            <div className={cx({ 'tooltip-wrapper': true, [this.props.className]: this.props.className !== null })} style={this.props.styles}>
                <div
                    ref={(div) => {
                        this.tooltipContainer = div;
                    }}>
                    <div
                        role="button"
                        tabIndex="0"
                        aria-label="Tooltip Hover Wrapper"
                        className="tooltip__hover-wrapper"
                        onBlur={this.closeTooltip}
                        onFocus={this.showTooltip}
                        onKeyPress={this.showTooltip}
                        onMouseEnter={this.showTooltip}
                        onMouseLeave={this.closeTooltip}
                        onClick={this.showTooltip}>
                        {this.props.children}
                        {this.props.icon && tooltipIcons[this.props.icon]}
                    </div>
                    {tooltip}
                </div>
            </div>
        );
    }
}

TooltipWrapper.propTypes = propTypes;
TooltipWrapper.defaultProps = defaultProps;
