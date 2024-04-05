import React from 'react';
import Table from '../../components/table/Table';

export default {
    title: 'Search Results Table',
    component: Table,
};
const Default = (args) =>
    <div style={{width:'1100px',overflowX: 'scroll', borderRadius: '8px', border: 'unset'}}>
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
        ]
    ,
    rows: [
        [<a href="/">Link</a>, 'mock data', '25%', 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2'],
        [<React.Fragment><strong>jsx</strong> content</React.Fragment>, 1234, 'mock data', 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2']
    ]};
