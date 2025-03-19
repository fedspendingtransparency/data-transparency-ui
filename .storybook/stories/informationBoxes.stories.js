import React from 'react';
import { TabsWrapper, TabsTooltip, InformationBoxesWrapper } from '../misc';
import InformationBoxes from '../../components/InformationBoxes';

export default {
  title: 'Information Boxes',
  component: InformationBoxes,
  tags: ['autodocs'],
};

const Template = (args) => (
  <InformationBoxes {...args} />
)

export const InformationBoxes2Count = Template.bind({});
InformationBoxes2Count.args =  {
  boxes:[
    {
      title: 'Total Obligations',
      type: 'totalObligations',
      amount: 819900000000,
      isMonetary: true,
    },
    {
      title: 'Total Outlays',
      type: 'totalOutlays',
      amount: 1070000000000,
      isLoading: true,
      isMonetary: true,
    },
  ]
}

export const InformationBoxes3Count = Template.bind({});
InformationBoxes3Count.args =  {
  boxes:[
    {
      title: 'Award Obligations',
      type: 'totalObligations',
      amount: 819900000000,
      isMonetary: true,
    },
    {
      title: 'Number of Transactions',
      type: 'numberOfTransactions',
      amount: 2531,
    },
    {
      title: 'Number of New Awards',
      type: 'numberOfNewAwards',
      amount: 125,
    },
  ]
}


export const InformationBoxes4Count = Template.bind({});

 InformationBoxes4Count.args  ={
  boxes:[
    {
      title: 'Number of Agencies',
      type: 'numOfAgencies',
      subtitle: 'for FY 19',
      amount: 13,
      subtitleBottom: 'with 32 offices',
    },
    {
      title: 'Total Budgetary Resources',
      type: 'totalBudget',
      subtitle: 'for FY 19',
      amount: 819900000000,
      isMonetary: true,
    },
    {
      title: 'Total Outlays',
      type: 'tOutlays',
      subtitle: 'for FY 19',
      amount: 1110000000000,
      isMonetary: true,
    },
    {
      title: 'Total Obligations',
      type: 'tObligations',
      subtitle: 'for FY 19',
      amount: 1070000000000,
      isMonetary: true,
    },
  ]
}

