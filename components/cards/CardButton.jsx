/**
 * CardBody.jsx
 * Created by Andrea Blackwell  09/09/2022
 */

import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";

const propTypes = {
    link: PropTypes.string,
    govLink: PropTypes.bool,
    onlyPerformAction: PropTypes.bool,
    action: PropTypes.func,
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]), // Can accept a string or markup
    variant: PropTypes.string, // primary, secondary, and text
    customClassName: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ]),
    disabled: PropTypes.bool
};

const CardButton = ({
    link, govLink, onlyPerformAction = "false", action, text, variant = "secondary", customClassName = '', children, disabled, buttonType,
}) => {
    const variantMapper = {
        primary: "primary",
        secondary: "secondary",
        text: "text"
    };

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            action();
        }
    };
    const handleOnClick = () => {
        window.location.href = link;
        action();
    }

    if (onlyPerformAction === true) {
        return (
            <div className="card__button">
                <Button onKeyUp={(e) => handleKeyUp(e)} onClick={action} copy={text || children} buttonTitle={text || children} buttonSize="md" buttonType={variantMapper[variant] === undefined ? "secondary" : variantMapper[variant]} backgroundColor="light" /> 
            </div>);
    }

    return (
        <div className="card__button">
            {govLink ? (
                <div
                    className={`card__button--secondary ${variantMapper[variant]}`}
                    role="button"
                    tabIndex="0"
                    aria-label={`${text}`}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        onKeyUp={(e) => handleKeyUp(e)}
                        onClick={action}
                        href={link}>
                        {text}
                    </a>
                    <Button onKeyUp={(e) => handleKeyUp(e)} onClick={action} copy={text || children} buttonTitle={text || children} buttonSize="md" buttonType={buttonType} backgroundColor="light" /> 
                </div>
            )
                :
                (
                    <>                    
                    {/* <a
                    className={`card__button--secondary ${variantMapper[variant]} ${customClassName}`}
                    role="button"
                    tabIndex={disabled ? "-1" : "0"}
                    aria-label={`${text}`}
                    href={link}
                    onKeyUp={(e) => handleKeyUp(e)}
                    onClick={action}>
                    {text || children}
                </a> */}
                <div className={variantMapper[variant] === "text" ? "card__button--container" : ""}>
                <Button
                onClick={handleOnClick}
                onKeyUp={(e) => handleKeyUp(e)}
                copy={text || children}
                buttonTitle={text || children}
                buttonSize="md"
                buttonType={variantMapper[variant] === undefined ? "secondary" : variantMapper[variant]}
                backgroundColor="light" />
                </div>
                </>


                    
                )}
        </div>
    );
};

CardButton.propTypes = propTypes;
export default CardButton;
