/**
  * Tab.jsx
  * Created by Kevin Li 11/29/16
  **/

import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import TooltipWrapper from '../../components/infoTooltip/TooltipWrapper';
import TooltipComponent from '../../components/infoTooltip/TooltipComponent';
import { createOnKeyDownHandler } from '../../helpers/keyboardEventsHelper';
import { formatNumber } from '../../helpers/moneyFormatter';

const propTypes = {
    label: PropTypes.string.isRequired,
    internal: PropTypes.string,
    labelContent: PropTypes.element,
    active: PropTypes.bool,
    enabled: PropTypes.bool,
    switchTab: PropTypes.func,
    className: PropTypes.string,
    tooltip: PropTypes.object,
    count: PropTypes.number,
    tablessStyle: PropTypes.bool
};

const Tab = (props) => {
    const tab = useRef(null);

    const clickedTab = () => {
        if (!props.enabled) return;
        if (tab?.current && tab.current?.scrollIntoView) tab.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        props.switchTab(props.internal);
    }

    const onKeyDownHandler = createOnKeyDownHandler(clickedTab);

    return (
        <div className={`usa-dt-tab__wrapper${!props.enabled ? ' disabled' : ''}${props.tablessStyle ? ' tabless-tab' : ''}`}>
            <div
                className={`usa-dt-tab${props.active ? ' active' : ''} ${props.className || ''}${!props.enabled ? ' disabled' : ''}`}
                ref={tab}
                onClick={clickedTab}
                onKeyDown={onKeyDownHandler}
                role="tab"
                title={`Show ${props.label}`}
                aria-label={`Show ${props.label}`}
                tabIndex={0}
                disabled={!props.enabled}>
                <div className="usa-dt-tab__content">
                    <div className="usa-dt-tab__label">
                        <div className="usa-dt-tab__label-text">{props.label}</div>
                        {props.count && <div aria-label={`Count of ${formatNumber(props.count)} for ${props.label}`} className={`count${props.active ? ' active' : ''}`}>
                            {formatNumber(props.count)}
                        </div>
                        }
                        {props.tooltip && <TooltipWrapper
                            tooltipComponent={(<TooltipComponent title={props.label}>{props.tooltip}</TooltipComponent>)}
                            icon="info" />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

Tab.propTypes = propTypes;
export default Tab;
