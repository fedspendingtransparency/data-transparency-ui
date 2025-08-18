import { startCase } from 'lodash-es';
import { formatMoney, formatNumber, unitValues, formatMoneyWithPrecision, formatNumberWithPrecision, calculateUnitForSingleValue } from './moneyFormatter';

export const formattedValue = (value, isMonetary, isForTabletPortaitUp) => {
    if (value !== 0 && !value) return null;
    // Generate formatted amount string
    let formattedAmount = isMonetary ? formatMoney(value) : formatNumber(value);
    if (Math.abs(value) > unitValues.MILLION) {
        const amount = calculateUnitForSingleValue(value);
        formattedAmount = `${isMonetary ? formatMoneyWithPrecision(value / amount.unit, 2) : formatNumberWithPrecision(value / amount.unit, 2)} ${isForTabletPortaitUp ? startCase(amount.longLabel) : amount.unitLabel}`;
    }
    return formattedAmount;
};

export const numberToText = {
    2: 'two',
    3: 'three',
    4: 'four'
};
