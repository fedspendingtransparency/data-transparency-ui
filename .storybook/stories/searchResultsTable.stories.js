import React from 'react';
import Table from '../../components/table/Table';

export default {
    title: 'Search Results Table',
    component: Table,
};
const Default = (args) =>
    <div style={{width:'800px', overflowX: 'scroll', borderRadius: '8px', border: 'solid 1px #dfe1e2'}}>
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
                displayName: 'Prime Award ID',
                columnWidth: 200,
            },
            {
                title: 'amount',
                displayName: 'Amount',
                columnWidth: 200,
            },
            {
                title: 'percent',
                displayName: '% of Total Amount',
                right: true,
                columnWidth: 200,
            },
            {
                title: 'test',
                displayName: 'test',
                columnWidth: 200,
            },
            {
                title: 'mock1',
                displayName: 'Mock Data 1',
                columnWidth: 200,
            },
            {
                title: 'mock2',
                displayName: 'Mock Data 2',
                columnWidth: 200,
            },
            {
                title: 'mock2',
                displayName: 'Mock Data 2',
                columnWidth: 200,
            },
            {
                title: 'mock2',
                displayName: 'Mock Data 2',
                columnWidth: 200,
            },
            {
                title: 'mock2',
                displayName: 'Mock Data 2',
                columnWidth: 200,
            },
            {
                title: 'mock2',
                displayName: 'Mock Data 2',
                columnWidth: 200,
            },
            {
                title: 'mock2',
                displayName: 'Mock Data 2',
                columnWidth: 200,
            }
        ]
    ,
    rows: [
        [<a href="/">Link</a>, 'first row', '25%', 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData'],
        [<React.Fragment><strong>jsx</strong> content</React.Fragment>, 'second row', 'mock data longlonglonglonglonglong longlonglonglonglonglong', 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData'],
        [<a href="/">Link</a>, 'third row', <a href="/">Link</a>, 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData'],
        [<a href="/">Link</a>, 'fourth row', <a href="/">Link</a>, 'test', 'mock1', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2', 'mock2LongerData']
    ]};
