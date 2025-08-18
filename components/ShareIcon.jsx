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
    colors: PropTypes.object,
    dropdownDirection: PropTypes.string,
    downloadInFlight: PropTypes.bool,
    isEnabled: PropTypes.bool,
    noShareText: PropTypes.bool,
    keepText: PropTypes.bool,
    pickerButtonClassNames: PropTypes.string,
    pickerListClassNames: PropTypes.string
};

const ShareIcon = ({
    includedDropdownOptions = [],
    classNames = '',
    url = '',
    onShareOptionClick = () => {},
    colors = {
        color: "#dfe1e2",
        backgroundColor: "#1a4480",
        confirmationBackgroundColor: "#f1f1f1"
    },
    dropdownDirection = 'left',
    downloadInFlight,
    isEnabled = true,
    noShareText,
    keepText = false,
    pickerButtonClassNames = '',
    pickerListClassNames = ""
}) => {
    const [showConfirmationText, setConfirmationText] = useState(false);
    const hideConfirmationText = debounce(() => setConfirmationText(false), 1750);
    const disabledClass = downloadInFlight || !isEnabled ? ' disabled' : '';

    const copyLink = () => {
        Array
            .from(document.querySelectorAll('.js-dtui-url-for-share-icon'))
        // eslint-disable-next-line consistent-return
            .forEach((node) => {
                if (node.value.includes(url)) {
                    return node.select();
                }
            });

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

    useEffect(() => {
        if (showConfirmationText) {
            hideConfirmationText();
        }
        return hideConfirmationText.cancel;
    }, [showConfirmationText]);

    return (
        <div className={`${classNames ? `usda-share-icon${disabledClass} ${classNames}` : `usda-share-icon${disabledClass}`}`}>
            <input
                aria-label="Share Input Link"
                type="text"
                className="js-dtui-url-for-share-icon text"
                style={{ position: 'absolute', right: '9999px', opacity: 0 }}
                value={url}
                readOnly />
            <Picker
                buttonClassNames={pickerButtonClassNames}
                pickerListClassNames={pickerListClassNames}
                dropdownDirection={dropdownDirection}
                options={socialSharePickerOptions}
                selectedOption="copy"
                backgroundColor={colors.backgroundColor}
                notEnabled={downloadInFlight || !isEnabled}
                sortFn={() => 1}>
                <FontAwesomeIcon icon="share-alt" size="lg" color={colors.color} />
            </Picker>
            {!noShareText && <span className={"usda-share-icon__share-text " + `${keepText ? 'keep-text' : ''}`}>Share</span>}
            {showConfirmationText && (
                <div className={"copy-confirmation " + `${keepText ? 'keep-text' : ''}`} style={{ backgroundColor: colors.confirmationBackgroundColor }}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {' '}
                    Copied!
                </div>
            )}
        </div>
    );
};

ShareIcon.propTypes = propTypes;
ShareIcon.displayName = 'Share Icon';
export default ShareIcon;
