/**
 * SearchResultsTableWrapper.jsx
 * Created by Brian Petway 4/11/24
 */

import React from 'react';
import Table from './table/Table';

require('../styles/components/_searchResultsTableWrapper.scss');

const columns = [
    {
        title: 'award',
        displayName: 'Prime Award ID',
        columnWidth: 200
    },
    {
        title: 'amount',
        displayName: 'Amount',
        columnWidth: 200
    },
    {
        title: 'percent',
        displayName: '% of Total Amount',
        right: true,
        columnWidth: 400
    },
    {
        title: 'test',
        displayName: 'test',
        columnWidth: 200
    },
    {
        title: 'mock1',
        displayName: 'Mock Data 1',
        columnWidth: 200
    },
    {
        title: 'mock2',
        displayName: 'Mock Data 2',
        columnWidth: 200
    },
    {
        title: 'mock2',
        displayName: 'Mock Data 2',
        columnWidth: 200
    },
    {
        title: 'mock2',
        displayName: 'Mock Data 2',
        columnWidth: 200
    },
    {
        title: 'mock2',
        displayName: 'Mock Data 2',
        columnWidth: 200
    },
    {
        title: 'mock2',
        displayName: 'Mock Data 2',
        columnWidth: 200
    },
    {
        title: 'mock2',
        displayName: 'Mock Data 2',
        columnWidth: 200
    }
];
const rows = [
    [<a href="/">Link</a>, 'first row', '25%', 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData'],
    [<>
        <strong>jsx</strong>
        {' '}
            content
     </>, 'second row', 'mock data longlonglonglonglonglong longlonglonglonglonglong', 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData'],
    [<a href="/">Link</a>, 'third row', <a href="/">Link</a>, 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData'],
    [<a href="/">Link</a>, 'fourth row', <a href="/">Link</a>, 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData']
];

const SearchResultsTableWrapper = () => {
    console.log('blah');

    return (
        <div className="everything">
            <div className="shadow">
                <Table
                    stickyFirstColumn
                    classNames="search-results"
                    columns={columns}
                    rows={rows} />
            </div>
        </div>
    );
};

export default SearchResultsTableWrapper;
