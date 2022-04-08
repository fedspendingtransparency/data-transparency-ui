import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce } from "lodash";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Picker from "./Picker";
import { socialShareOptions } from '../helpers/socialShare';

require('../styles/components/_shareIcon.scss');

const propTypes = {
    url: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    onShareOptionClick: PropTypes.func.isRequired,
    includedDropdownOptions: PropTypes.arrayOf(PropTypes.string),
    colors: PropTypes.object
};

const ShareIcon = ({
    includedDropdownOptions = [],
    classNames = '',
    url = '',
    onShareOptionClick = () => {},
    colors = {
        color: "#3A8250",
        backgroundColor: "#4A4A4A"
    }
}) => {
    const [showConfirmationText, setConfirmationText] = useState(false);
    const hideConfirmationText = debounce(() => setConfirmationText(false), 1750);

    useEffect(() => {
        if (showConfirmationText) {
            hideConfirmationText();
        }
        return hideConfirmationText.cancel;
    }, [showConfirmationText, setConfirmationText, hideConfirmationText]);

    const copyLink = () => {
        Array
            .from(document.querySelectorAll('.js-dtui-url-for-share-icon'))
            .forEach((node) => node.select());

        document.execCommand("copy");
        setConfirmationText(true);
        onShareOptionClick('copy');
    };

    const socialSharePickerOptions = socialShareOptions
        .filter(({ name }) => {
            if (!includedDropdownOptions.length) return true;
            return includedDropdownOptions.includes(name);
        })
        .map((option) => {
            if (option.name === 'copy') {
                return {
                    ...option,
                    onClick: copyLink
                };
            }
            return {
                ...option,
                onClick: () => onShareOptionClick(option.name)
            };
        });

    return (
        <div className={`${classNames ? `usda-share-icon ${classNames}` : 'usda-share-icon'}`}>
            <input
                aria-label="Share Input Link"
                type="text"
                className="js-dtui-url-for-share-icon text"
                style={{ position: 'absolute', right: '9999px', opacity: 0 }}
                value={url}
                readOnly />
            <Picker
                dropdownDirection="left"
                options={socialSharePickerOptions}
                selectedOption="copy"
                backgroundColor={colors.backgroundColor}
                sortFn={() => 1}>
                <FontAwesomeIcon icon="share-alt" size="lg" color={colors.color} />
            </Picker>
            <span>Share</span>
            {showConfirmationText && (
                <span className="copy-confirmation">
                    <FontAwesomeIcon icon={faCheckCircle} /> Copied!
                </span>
            )}
        </div>
    );
};

ShareIcon.propTypes = propTypes;
ShareIcon.displayName = 'Share Icon';
export default ShareIcon;
