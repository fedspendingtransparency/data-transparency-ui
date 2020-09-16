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
        top: -15, // InfoToolTip offset
        right: 30, // InfoToolTip offset
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
            arrowStyles: {},
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

    componentDidUpdate(prevProps) {
        if (
            prevProps.wide !== this.props.wide ||
            prevProps.tooltipPosition !== this.props.tooltipPosition
        ) {
            this.setTooltipDimensions();
        }
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

        if (total < 425) {
            // mobile tooltip stylez
            return total - (horizontalPadding * 2);
        }
        else if (this.props.wide && this.props.tooltipPosition === 'left') {
            return (spaceToLeft > 800)
                ? 700
                : spaceToLeft - horizontalPadding;
        }
        else if (this.props.tooltipPosition === 'bottom') {
            return `${this.props.width || baseTooltipWidth}px`;
        }
        else if (this.props.wide) {
            return (spaceToRight > 800)
                ? 700
                : spaceToRight - horizontalPadding;
        }
        return this.props.width;
    };

    getDimensionsForMobile = (isMobile, { offsetTop: top, tooltipWidth: width }) => {
        if (isMobile) {
            return {
                top,
                width,
                left: `50%`
            };
        }
        return {
            ...this.state.spacerStyles,
            width
        };
    }

    setTooltipDimensions() {
        if (this.tooltipContainer && Object.keys(this.props.styles).includes('transform')) {
            // The consumer is overriding our positioning, just set the width.
            this.setState({
                spacerStyles: {
                    ...this.state.spacerStyles,
                    width: this.getTooltipWidth()
                }
            });
        }
        else if (this.tooltipContainer) {
            // confirming the tooltip is mounted
            const tooltipWidth = this.getTooltipWidth();

            const { left: spaceToLeft, total } = this.getAvailableHorizontalSpace();
            const offsetTop = this.tooltipContainer.offsetTop + this.props.offsetAdjustments.top;
            const isMobile = total < 700;
            if (this.props.tooltipPosition === 'bottom' || isMobile) {
                this.setState({
                    arrowStyles: {
                        top: '-1.6rem', // half the height of the arrow
                        left: `calc(50% - 8px)`, // add 8 for half the pointer
                        transform: 'rotate(90deg)'
                    },
                    spacerStyle: {
                        ...this.getDimensionsForMobile(isMobile, { offsetTop, tooltipWidth })
                    }
                });
            }
            else if (this.props.tooltipPosition === 'left') {
                const startingPositionLeft = spaceToLeft - tooltipWidth; // minus tooltipWidth b/c right corner of toolTip is flush w/ left edge of toolTip container
                this.setState({
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

    arrowClassName = () => (this.props.tooltipPosition === 'left' ? 'right' : '');

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
                            <div
                                className={`tooltip-pointer ${this.arrowClassName()}`}
                                style={this.state.arrowStyles} />
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
