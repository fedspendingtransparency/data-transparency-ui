/**
 * fiscalYearHelper.js
 * Created by Kevin Li 1/24/17
 */

export const earliestFiscalYear = 2008;
export const earliestExplorerYear = 2017;
export const earliestFederalAccountYear = 2017;
export const allFiscalYears = (earliestYear = earliestFiscalYear, latestYear) => {
    const years = [...new Array(latestYear - earliestYear)];
    return years
        .reduce((listOfYears, _, i) => {
            listOfYears.push(earliestYear + i + 1);
            return listOfYears;
        }, [earliestYear])
        .sort((a, b) => b - a);
};
