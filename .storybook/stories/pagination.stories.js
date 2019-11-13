import React from 'react';
import { withKnobs, number, object } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';
import { withActions, actions } from '@storybook/addon-actions';

import Pagination from '../../components/Pagination';

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

export const defaultPagination = () => (
    <div className="story__container">
        <Pagination
            {...actions({ onChangePage: 'pageChange params' })}
            pageNumber={number("pageNumber", 1)}
            pageSize={number("pageSize", 10)}
            totalItems={number("totalItems", 100)}
            resultsText={object("resultsText", <p>Results</p>)} />
    </div>
);

defaultPagination.story = { name: 'Default Pagination' };
