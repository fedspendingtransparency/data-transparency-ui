import React from 'react';
import Table from '../../components/table/Table';
import TooltipWrapper from '../../components/infoTooltip/TooltipWrapper';
import TooltipComponent from '../../components/infoTooltip/TooltipComponent';
import { TableWrapper, BasicTableWrapper, CustomColumnExample } from '../misc';

export default {
  title: 'Table',
  component: Table,
};

export const TableDefault = () => (
  <TableWrapper>
    <Table
      rows={[
        [<a href="/">Link</a>, 'mock data', '25%'],
        [
          <React.Fragment>
            <strong>jsx</strong> content
          </React.Fragment>,
          1234,
          'mock data',
        ],
      ]}
    />
  </TableWrapper>
);

export const TableWithoutSorting = () => (
  <BasicTableWrapper>
    <Table
      stickyFirstColumn={true}
      columns={[
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
      ]}
      rows={[
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
      ]}
    />
  </BasicTableWrapper>
);

TableWithoutSorting.story = {
  name: 'Table without Sorting',
};

export const ExpandableTableWithoutDivider = () => (
  <TableWrapper>
    <Table
      rows={[
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
      ]}
      expandable
    />
  </TableWrapper>
);

ExpandableTableWithoutDivider.story = {
  name: 'Expandable Table without Divider',
};

export const ExpandableTableWithDivider = () => (
  <TableWrapper>
    <Table
      rows={[
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
      ]}
      expandable
      divider="Budget Sub-Function"
    />
  </TableWrapper>
);

ExpandableTableWithDivider.story = {
  name: 'Expandable Table with Divider',
};

export const TableWSubColumnsTooltips = () => (
  <TableWrapper
    columns={[
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
          },
          {
            displayName: 'P7',
            title: 'P7',
          },
          {
            displayName: 'P6',
            title: 'P6',
          },
        ],
      },
    ]}
  >
    <Table
      rows={[
        [
          <a href="/">Department of the Treasury (TREAS)</a>,
          'mock data',
          '25%',
          '26%',
          '$1.2 million',
          '$1.3 million',
          '$1.4 million',
          '$1.5 million',
        ],
        [
          <React.Fragment>
            <strong>jsx</strong> content
          </React.Fragment>,
          1234,
          'mock data',
          'mock data IIIIIIIII',
          '$5.2 million',
          '$2.3 million',
          '$11.4 million',
          '$23.5 million',
        ],
      ]}
    />
  </TableWrapper>
);

TableWSubColumnsTooltips.story = {
  name: 'Table w/ Sub Columns & Tooltips',
};

export const TableWithFirstColumnHeaders = () => (
  <div className="story__container table-story">
    <Table
      columns={[
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
      ]}
      rows={[
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
      ]}
    />
  </div>
);

TableWithFirstColumnHeaders.story = {
  name: 'Table with First Column Headers',
};

export const LoadingTable = () => (
  <BasicTableWrapper>
    <Table loading></Table>
  </BasicTableWrapper>
);

LoadingTable.story = {
  name: 'Loading Table',
};

export const TableError = () => (
  <BasicTableWrapper>
    <Table error></Table>
  </BasicTableWrapper>
);

TableError.story = {
  name: 'Table Error',
};

export const CustomErrorMessage = () => (
  <BasicTableWrapper>
    <Table error message="Custom error message here."></Table>
  </BasicTableWrapper>
);

CustomErrorMessage.story = {
  name: 'Custom Error Message',
};

export const NoResults = () => (
  <BasicTableWrapper>
    <Table rows={[]}></Table>
  </BasicTableWrapper>
);

NoResults.story = {
  name: 'No Results',
};

export const StackedResponsiveTable = () => (
  <TableWrapper>
    <Table
      isStacked
      rows={[
        ['Transportation', '$100', '20%'],
        ['Health', '$150', '30%'],
        ['General Science', '$250', '50%'],
      ]}
    />
  </TableWrapper>
);

StackedResponsiveTable.story = {
  name: 'Stacked Responsive Table',
};
