import React from 'react';
import Pagination from '../../components/pagination/Pagination';
import { PaginationWrapper } from '../misc';

export default {
  title: 'Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export const Default = (args) => (
  <PaginationWrapper>
    <Pagination {...args} />
  </PaginationWrapper>
);

export const DefaultResultsText = Default.bind({});
DefaultResultsText.args = {
  resultsText: true,
}

export const CustomResultsText = Default.bind({});
CustomResultsText.args = {
  resultsText: <div className="usa-dt-pagination__totals"><strong>Custom</strong> results text</div>
}

export const LimitSelector = Default.bind({});
LimitSelector.args = {
  limitSelector: true,
  resultsText: true,
  pageSize: 50,
  totalItems: 100
}
export const LimitSelectorAndGoToPage = Default.bind({});
LimitSelectorAndGoToPage.args = {
  gotToPage: true,
  id: "sample-id-2",
  limitSelector: true,
  resultsText: true,
  pageSize: 10,
  totalItems: 100
}

export const GoToPage = Default.bind({});
GoToPage.args = {
  goToPage: true,
  id: "sample-id-2",
  pageSize: 10,
  totalItems: 100
};
