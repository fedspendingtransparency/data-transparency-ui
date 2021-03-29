import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { formattedValue, numberToText } from '../helpers/informationBoxesHelper';

require('../styles/components/_informationBoxes.scss');

const defaultProps = {
    boxes: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        amount: PropTypes.number,
        isMonetary: PropTypes.bool,
        subtitle: PropTypes.string,
        isLoading: PropTypes.bool
    }))
};

const InformationBoxes = ({ boxes }) => {
    const [isForTabletPortaitUp, setIsForTabletPortaitUp] = useState(window.innerWidth > 768);

    const checkWidth = () => debounce(() => setIsForTabletPortaitUp(window.innerWidth > 768));
    console.log(' Window Inner Width : ', window.innerWidth);
    useEffect(() => {
        window.addEventListener('resize', checkWidth);
        return () => window.removeEventListener('resize', checkWidth);
    }, []);

    return (
        <div className={`usa-dt-information-boxes ${numberToText[boxes.length]}-boxes`}>
            {
                boxes.map((box) => (
                    <div className="usa-dt-information-box">
                        <div className="usa-dt-information-box__content">
                            <div className="usa-dt-information-box__title">
                                {box.title}
                            </div>
                            <div className="usa-dt-information-box__subtitle">
                                {box.subtitle}
                            </div>
                            <div className={`usa-dt-information-box__amount${box.isLoading ? ' loading' : ''}`}>
                                {box.isLoading && <div className="dot-pulse" />}
                                {!box.isLoading && formattedValue(box.amount, box.isMonetary, isForTabletPortaitUp)}
                            </div>
                            <div className="usa-dt-information-box__divider" />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

InformationBoxes.propTypes = defaultProps;
export default InformationBoxes;
