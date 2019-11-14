import React, { useState } from 'react';
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
            pageNumber={page}
            pageSize={10}
            totalItems={100} />
    </div>
  );
};

defaultPagination.story = { name: 'Default Pagination' };
