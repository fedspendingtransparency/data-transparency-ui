import React from 'react';
import { boolean, object } from '@storybook/addon-knobs';
import Pagination from '../../components/pagination/Pagination';
import { PaginationWrapper } from '../misc';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const LimitSelectorAndGoToPage = () => (
  <PaginationWrapper>
    <Pagination
      goToPage
      id="sample-id-1"
      limitSelector
      resultsText
      pageSize={10}
      totalItems={100}
    />
  </PaginationWrapper>
);

LimitSelectorAndGoToPage.story = {
  name: 'Limit selector and "Go to page"',
};

export const GoToPage = () => (
  <PaginationWrapper>
    <Pagination goToPage id="sample-id-2" pageSize={10} totalItems={100} />
  </PaginationWrapper>
);

GoToPage.story = {
  name: '"Go to Page"',
};

export const LimitSelector = () => (
  <PaginationWrapper>
    <Pagination limitSelector resultsText pageSize={10} totalItems={100} />
  </PaginationWrapper>
);

LimitSelector.story = {
  name: 'Limit Selector',
};

export const CustomResultsText = () => (
  <PaginationWrapper>
    <Pagination
      pageSize={10}
      resultsText={
        <div className="usa-dt-pagination__totals">
          <strong>Custom</strong> results text
        </div>
      }
      totalItems={100}
    />
  </PaginationWrapper>
);

CustomResultsText.story = {
  name: 'Custom Results Text',
};

export const DefaultResultsText = () => (
  <PaginationWrapper>
    <Pagination resultsText pageSize={10} totalItems={100} />
  </PaginationWrapper>
);

DefaultResultsText.story = {
  name: 'Default Results Text',
};

export const Default = () => (
  <PaginationWrapper>
    {/* /* handler Funcs Passed from PaginationWrapper */}
    <Pagination pageSize={10} totalItems={100} />
  </PaginationWrapper>
);
