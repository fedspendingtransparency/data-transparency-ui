/**
 * InfoTooltip.jsx
 * Created by Lizzie Salita 3/8/19
 */

import React from 'react';
import PropTypes from 'prop-types';

require("../styles/components/_button.scss");

const propTypes = {
    text: PropTypes.string               
};

const defaultProps = {
    text: "Click Me"
};

const arbitraryParamForOnClick = 'Hi, this is an arbitrary param used in the handleClick fn';

export const Button = ({ text, handleClick }) => (
    <button onClick={(e) => handleClick(e, arbitraryParamForOnClick)} className="default-button">{`${text}, Hombre`}</button>
);

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;
