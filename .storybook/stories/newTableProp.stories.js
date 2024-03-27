import React from 'react';
import Table from '../../components/table/Table';


export default {
    title: 'Table new props',
    component: Table,
  };
  const Default = (args) => 
  <div style={{width:'400px',overflowX: 'scroll'}}>
    <Table {...args} />
</div>;
  export const Primary = Default.bind({});
  Primary.args = { stickyFirstColumn: true,
    columns:
        [
            {
                title: 'name',
                displayName: 'Budget Function'
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