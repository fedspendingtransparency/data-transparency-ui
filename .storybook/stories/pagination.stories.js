import React, { useState } from 'react';
import { withKnobs, number, object } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
import { withActions, actions } from '@storybook/addon-actions';

import Pagination from '../../components/pagination/Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  decorators: [withKnobs, withA11y, withActions('onClick')],
  parameters: {
    a11y: {
      // ... axe options
      element: '.story__container', // optional selector which element to inspect
      config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
      options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    },
  }
};
/*
 * If this PR Gets merged (https://github.com/storybookjs/storybook/pull/3909)...
 * We can use knobs for controlled components.
 * As of right now, if we use knobs to update a prop the component will only update via knobs
*/  
export const defaultPagination = () => {
  const [page, onChangePage] = useState(1);
  const handlePageChange = (pg) => {
    console.log("onChangePage handler invoked w/ this parameter: ", pg);
    onChangePage(pg);
  };
  return (
    <div className="story__container">
        <Pagination
            onChangePage={handlePageChange}
            currentPage={page}
            pageSize={10}
            totalItems={100} />
    </div>
  );
};

export const resultsTextPagination = () => {
  const [page, onChangePage] = useState(1);
  const handlePageChange = (page) => {
    console.log("onChangePage handler invoked w/ this parameter: ", page);
    onChangePage(page);
  };
  return (
    <div className="story__container">
        <Pagination
            onChangePage={handlePageChange}
            currentPage={page}
            pageSize={10}
            totalItems={100}
            resultsText />
    </div>
  );
};

export const customResultsTextPagination = () => {
  const [page, onChangePage] = useState(1);
  const handlePageChange = (page) => {
    console.log("onChangePage handler invoked w/ this parameter: ", page);
    onChangePage(page);
  };
  const resultsText = (
    <div className="pagination__totals">
      <strong>Custom</strong> results text
    </div>
  );
  return (
    <div className="story__container">
        <Pagination
            onChangePage={handlePageChange}
            currentPage={page}
            pageSize={10}
            totalItems={100}
            customResultsText={resultsText} />
    </div>
  );
};

export const limitSelectorPagination = () => {
  const [page, onChangePage] = useState(1);
  const handlePageChange = (page) => {
    console.log("onChangePage handler invoked w/ this parameter: ", page);
    onChangePage(page);
  };
  const [pageSize, changeLimit] = useState(2);
  const handleChangeLimit = (pageSize) => {
    console.log("changeLimit handler invoked w/ this parameter: ", pageSize);
    changeLimit(pageSize);
  }
  return (
    <div className="story__container">
        <Pagination
            onChangePage={handlePageChange}
            currentPage={page}
            pageSize={pageSize}
            totalItems={100}
            limitSelector
            resultsText
            changeLimit={handleChangeLimit} />
    </div>
  );
};

defaultPagination.story = { name: 'Default Pagination' };
resultsTextPagination.story = { name: 'Pagination with default results text' };
customResultsTextPagination.story = { name: 'Pagination with custom results text' };
limitSelectorPagination.story = { name: 'Pagination with limit selector' };
