import React from 'react';
import Table from '../../components/table/Table';

export default {
    title: 'Search Results Table',
    component: Table,
};
const Default = (args) =>
    <div style={{width:'400px', overflowX: 'scroll', borderRadius: '8px', border: 'solid 1px #dfe1e2'}}>
        <Table {...args} />
    </div>;
export const ExampleOne = Default.bind({});
ExampleOne.args = {
    stickyFirstColumn: true,
    classNames: 'search-results',
    columns:
        [
            {
                title: 'award',
                displayName: 'Prime Award ID'
            },
            {
                title: 'amount',
                displayName: 'Amount'
            },
            {
                title: 'percent',
                displayName: '% of Total Amount',
                right: true
            },
            {
                title: 'test',
                displayName: 'test',
            },
            {
                title: 'mock1',
                displayName: 'Mock Data 1',
            },
            {
                title: 'mock2',
                displayName: 'Mock Data 2',
            },
            {
                title: 'mock2',
                displayName: 'Mock Data 2',
            },
            {
                title: 'mock2',
                displayName: 'Mock Data 2',
            },
            {
                title: 'mock2',
                displayName: 'Mock Data 2',
            },
            {
                title: 'mock2',
                displayName: 'Mock Data 2',
            },
            {
                title: 'mock2',
                displayName: 'Mock Data 2',
            }
        ]
    ,
    rows: [
        [<a href="/">Link</a>, 'first row', '25%', 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData'],
        [<React.Fragment><strong>jsx</strong> content</React.Fragment>, 'second row', 'mock data', 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData']
    ]};
