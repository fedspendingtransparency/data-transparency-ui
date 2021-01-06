/**
  * LoadingMessage.jsx
  * Created by Lizzie Salita 11/17/20
**/

import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const LoadingMessage = ({
    loadingText = "Gathering your data..."
}) => (
    <TransitionGroup>
        <CSSTransition
            classNames="usda-loading-animation__container"
            timeout={{ exit: 225, enter: 195 }}
            exit>
            <div className="usda-loading-animation__container">
                <div className="usda-loading-animation">
                    <svg
                        className="usda-loading-bars"
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="50"
                        height="50"
                        style={{
                            opacity: 0
                        }}>
                        <rect
                            className="bar-one"
                            x="0"
                            y="0"
                            height="50"
                            width="10" />
                        <rect
                            className="bar-two"
                            x="13"
                            y="0"
                            height="50"
                            width="10" />
                        <rect
                            className="bar-three"
                            x="26"
                            y="0"
                            height="50"
                            width="10" />
                        <rect
                            className="bar-four"
                            x="39"
                            y="0"
                            height="50"
                            width="10" />
                    </svg>
                </div>
                <div className="loading-message">
                    {loadingText}
                </div>
            </div>
        </CSSTransition>
    </TransitionGroup>
);

LoadingMessage.propTypes = {
    loadingText: PropTypes.string
};

export default LoadingMessage;
