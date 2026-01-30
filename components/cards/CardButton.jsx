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
    link,
    govLink,
    onlyPerformAction = "false",
    action,
    text,
    variant = "secondary",
    customClassName = '',
    children,
    backgroundColor,
    buttonSize,
    textAlignment,
    disabled = false
}) => {
    const variantMapper = {
        primary: "primary",
        secondary: "secondary",
        text: "text"
    };
    const variantMapperStyle = {
        primary: "card__button--primary",
        secondary: "card__button--secondary ",
        text: "card__button--borderless"
    };

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            action();
        }
    };
    const handleOnClick = () => {
        window.location.href = link;
        action();
    };

    if (onlyPerformAction === true) {
        return (
            <div className="card__button">
                <Button
                    additionalClassnames={customClassName}
                    onKeyUp={(e) => handleKeyUp(e)}
                    onClick={action}
                    copy={text || children}
                    buttonTitle={text || children}
                    buttonSize="md"
                    buttonType={variantMapper[variant] === undefined ? "secondary" : variantMapper[variant]}
                    backgroundColor="light"
                    textAlignment="center"
                    disabled={disabled} />
            </div>
        );
    }

    return (
        <div className="card__button">
            {govLink ? (
                <div className={`card__button--secondary ${variantMapperStyle[variant]}`}>
                    <Button
                        aria-label={`${text}`}
                        tabIndex="0"
                        additionalClassnames={customClassName}
                        onClick={handleOnClick}
                        onKeyUp={(e) => handleKeyUp(e)}
                        copy={text || children}
                        buttonTitle={text || children}
                        buttonSize={buttonSize}
                        textAlignment={textAlignment}
                        buttonType={variantMapper[variant] === undefined ? "secondary" : variantMapper[variant]}
                        backgroundColor={backgroundColor}
                        disabled={disabled} />
                </div>
            )
                : (
                    <div className={`${variantMapperStyle[variant]}`}>
                        <Button
                            aria-label={`${text}`}
                            tabIndex="0"
                            additionalClassnames={customClassName}
                            onClick={handleOnClick}
                            onKeyUp={(e) => handleKeyUp(e)}
                            copy={text || children}
                            buttonTitle={text || children}
                            buttonSize={buttonSize}
                            textAlignment={textAlignment}
                            buttonType={variantMapper[variant] === undefined ? "secondary" : variantMapper[variant]}
                            backgroundColor={backgroundColor}
                            disabled={disabled} />
                    </div>
                )}
        </div>
    );
};

CardButton.propTypes = propTypes;
export default CardButton;
