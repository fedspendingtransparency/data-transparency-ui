import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debounce } from "lodash";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Picker from "./Picker";
import { socialShareOptions } from '../helpers/socialShare';

const propTypes = {
    slug: PropTypes.string,
    url: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    email: PropTypes.shape({
        subject: PropTypes.string,
        body: PropTypes.string
    }),
    onShareOptionClick: PropTypes.func.isRequired,
    includedDropdownOptions: PropTypes.arrayOf(PropTypes.string)
};

const ShareIcon = ({
    includedDropdownOptions = [],
    classNames = '',
    url = '',
    onShareOptionClick = () => {}
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
        document.getElementById('slug').select();
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
                id="slug"
                aria-label="Share Input Link"
                type="text"
                className="text"
                style={{ position: 'absolute', right: '9999px', opacity: 0 }}
                value={url}
                readOnly />
            <Picker
                dropdownDirection="left"
                options={socialSharePickerOptions}
                selectedOption="copy"
                backgroundColor="#4A4A4A"
                sortFn={() => 1}>
                <FontAwesomeIcon icon="share-alt" size="lg" />
            </Picker>
            <span>Share</span>
            {showConfirmationText && (
                <span className="copy-confirmation">
                    <FontAwesomeIcon icon={faCheckCircle} color="#3A8250" /> Copied!
                </span>
            )}
        </div>
    );
};

ShareIcon.propTypes = propTypes;

export default ShareIcon;
