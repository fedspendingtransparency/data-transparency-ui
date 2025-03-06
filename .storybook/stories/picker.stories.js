import React from 'react';
import { array, object, text, select, boolean } from '@storybook/addon-knobs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Picker from '../../components/Picker';
import { PickerWrapper } from '../misc';

export default {
  title: 'Picker',
  component: Picker,
};

export const Default = () => (
  <PickerWrapper>
    <Picker
      isFixedWidth={boolean('isFixedWidth', false)}
      icon={<FontAwesomeIcon icon="calendar-alt" size="lg" color="black" />}
      dropdownDirection={select('dropdownDirection', ['right', 'left'], 'right', '')}
    />
  </PickerWrapper>
);

export const WChildren = () => (
  <PickerWrapper>
    <Picker
      isFixedWidth={boolean('isFixedWidth', false)}
      dropdownDirection={select('dropdownDirection', ['right', 'left'], 'right', '')}
    >
      <FontAwesomeIcon icon="share-alt" size="lg" color="black" />
    </Picker>
  </PickerWrapper>
);

WChildren.story = {
  name: 'w/ Children',
};
