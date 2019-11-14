import React, { useState } from 'react';
import { withKnobs, array } from "@storybook/addon-knobs";
import { withA11y } from '@storybook/addon-a11y';

import QuarterPicker from '../../components/QuarterPicker';

export default {
  title: 'QuarterPicker',
  component: QuarterPicker,
  decorators: [withKnobs, withA11y],
  parameters: {
    a11y: {
      // ... axe options
      element: '.story__container', // optional selector which element to inspect
      config: {}, // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
      options: {} // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    },
  }
};

export const defaultQuarterPicker = () => {
    const [selectedQuarters, setSelectedQuarters] = useState([]); 
    return (
        <div className="story__container tooltip-story">
            <QuarterPicker
                pickedQuarter={setSelectedQuarters}
                disabledQuarters={[false, false, false, false]}
                selectedQuarters={selectedQuarters} />
        </div>
    );
};

defaultQuarterPicker.story = { name: 'Tooltip Wrapper' };
