import React from 'react';
import Table from '../../components/table/Table';
import TooltipWrapper from '../../components/infoTooltip/TooltipWrapper';
import TooltipComponent from '../../components/infoTooltip/TooltipComponent';
import { TableWrapper, BasicTableWrapper, CustomColumnExample } from '../misc';

export default {
  title: 'Table',
  component: Table,
  tags: ['autodocs'],
};

const expandableData = [
  {
    name: 'Transportation',
    amount: '$100',
    percent: '20%',
  },
  {
    name: 'Health',
    amount: '$150',
    percent: '30%',
    children: [
      {
        name: 'Health care services',
        amount: '$150',
        percent: '30%',
      },
    ],
  },
  {
    name: 'General Science',
    amount: '$250',
    percent: '50%',
    children: [
      {
        name: 'Space flight',
        amount: '$200',
        percent: '40%',
      },
      {
        name: 'Basic research',
        amount: '$50',
        percent: '10%',
      },
    ],
  },
]

const rowData = [
  [<a href="/">Link</a>, 'mock data', '25%', 'test', 'mock1', 'mock2'],
  [
    <React.Fragment>
      <strong>jsx</strong> content
    </React.Fragment>,
    1234,
    'mock data',
    'test',
    'mock1',
    'mock2',
  ],
];

const columns = [
  {
    title: 'name',
    displayName: 'Budget Function',
  },
  {
    title: 'amount',
    displayName: 'Amount',
  },
  {
    title: 'percent',
    displayName: '% of Total Amount',
    right: true,
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
]

const tooltipColumns = 
  [
    {
      title: 'name',
      displayName: 'Agency  Name',
      icon: (
        <TooltipWrapper
          icon="info"
          tooltipComponent={
            <TooltipComponent title="Test Tooltip">
              <div>Test content for tooltip</div>
            </TooltipComponent>
          }
        />
      ),
    },
    {
      title: 'total',
      displayName: 'Total Budgetary  Resources',
    },
    {
      title: 'Q4',
      displayName: 'FY 2020 Q4',
      columnSpan: '2',
      subColumnNames: [
        {
          displayName: 'P10',
          title: 'P10',
        },
        {
          displayName: 'P11',
          title: 'P11',
        },
      ],
    },
    {
      title: 'Q3',
      displayName: 'FY 2020 Q3',
      columnSpan: '4',
      subColumnNames: [
        {
          displayName: 'P9',
          title: 'P9',
        },
        {
          displayName: 'P8',
          title: 'P8',
        }
      ],
    },
]

const TableInTableWrapperTemplate = (args) => (
  <TableWrapper>
    <Table {...args} />
  </TableWrapper>
)

const BasicTableWrapperTemplate = (args) => (
  <BasicTableWrapper>
    <Table {...args} />
  </BasicTableWrapper>
)

const TableWrapperTemplate = (args) => (
  <TableWrapper {...args} >
    <Table rows={rowData} columns={columns} />
  </TableWrapper>
)

const TableTemplate = (args) => (
   <Table {...args} />
)

const StackTemplate = (args) => (
  <>
  <TableWrapper>
    <Table {...args} />
  </TableWrapper>
    <TableWrapper>
    <Table {...args} />
  </TableWrapper>
  </>
)
export const DefaultTable = TableInTableWrapperTemplate.bind({});
DefaultTable.args = {
  rows: rowData
}

export const TableWithoutSorting = BasicTableWrapperTemplate.bind({});
TableWithoutSorting.args = {
  stickyFirstColumn: true,
  columns: columns,
  rows: rowData
}

export const ExpandableWithoutDivider = TableInTableWrapperTemplate.bind({});
ExpandableWithoutDivider.args = {
  rows: expandableData,
  expandable: true
}

export const ExpandableTableWithDivider = TableInTableWrapperTemplate.bind({});
ExpandableTableWithDivider.args = {
  rows: expandableData,
  expandable: true,
  divider:"Budget Sub-Function"
}

export const TableWSubColumnsTooltips = TableWrapperTemplate.bind({});
TableWSubColumnsTooltips.args = {
  columns: tooltipColumns
}

export const TableWithFirstColumnHeaders = TableTemplate.bind({});
TableWithFirstColumnHeaders.args = {
  columns: [
    {
      title: 'blank',
      displayName: '',
      bodyHeader: true,
    },
    {
      title: 'name',
      displayName: 'Budget Function',
    },
    {
      title: 'amount',
      displayName: 'Amount',
    },
    {
      title: 'percent',
      displayName: '% of Total Amount',
      right: true,
    },
  ],
  rows:[
    [
      {
        displayName: 'Body Header',
        title: '',
        rowSpan: '0',
      },
      <a href="/">Link</a>,
      'mock data',
      '25%',
    ],
    [
      {
        displayName: 'Body Header',
        title: '',
        rowSpan: '0',
      },
      <React.Fragment>
        <strong>jsx</strong> content
      </React.Fragment>,
      1234,
      'mock data',
    ],
  ]
}

export const LoadingTable = BasicTableWrapperTemplate.bind({});
LoadingTable.args = {
  loading: true,
  columns: columns,
}

export const ErrorTable = BasicTableWrapperTemplate.bind({});
ErrorTable.args = {
  error: true,
  columns: columns,
}

export const CustomErrorMessage = BasicTableWrapperTemplate.bind({});
CustomErrorMessage.args = {
  error: true,
  columns: columns,
  message: "Custom error message here"
}

export const NoResults = TableInTableWrapperTemplate.bind({});
NoResults.args = {
  rows: []
}

export const Stacked = StackTemplate.bind({});
Stacked.args = {
  isStacked: true,
  rows: [ 
    ['Transportation', '$100', '20%'],
    ['Health', '$150', '30%'],
    ['General Science', '$250', '50%']
  ]
}

