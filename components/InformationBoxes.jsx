import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import { formattedValue, numberToText } from '../helpers/informationBoxesHelper';

require('../styles/components/_informationBoxes.scss');

const defaultProps = {
    boxes: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        amount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        isMonetary: PropTypes.bool,
        isString: PropTypes.bool,
        subtitle: PropTypes.string,
        subtitleBottom: PropTypes.string,
        isLoading: PropTypes.bool
    }))
};

const InformationBoxes = ({ boxes }) => {
    const [isForTabletPortaitUp, setIsForTabletPortaitUp] = useState(window.innerWidth > 1200);

    const checkWidth = throttle(() => setIsForTabletPortaitUp(window.innerWidth > 1200));

    useEffect(() => {
        checkWidth();
        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);
    }, []);

    return (
        <div className={`usa-dt-information-boxes ${numberToText[boxes.length]}-boxes`}>
            {
                boxes.map((box) => (
                    <div key={box.type} className="usa-dt-information-box">
                        <div className="usa-dt-information-box__divider">
                            <div className={`usa-dt-information-box__content${box.subtitle ? ' with-subtitle' : ''}`}>
                                <div className="usa-dt-information-box__title">
                                    {box.title}
                                </div>
                                {box.subtitle
                                    && (
                                        <div className="usa-dt-information-box__subtitle">
                                            {box.subtitle}
                                        </div>
                                    )}
                                <div className={`usa-dt-information-box__amount${box.isLoading ? ' loading' : ''}`}>
                                    {box.isLoading && <div className="dot-pulse" />}
                                    {!box.isLoading && box.isString ? box.amount : ''}
                                    {!box.isLoading && !box.isString && formattedValue(box.amount, box.isMonetary, isForTabletPortaitUp)}
                                </div>
                                {box.subtitleBottom
                                    && (
                                        <div className="usa-dt-information-box__subtitle-bottom">
                                            {box.subtitleBottom}
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

InformationBoxes.propTypes = defaultProps;
export default InformationBoxes;
