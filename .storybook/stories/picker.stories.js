import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Picker from '../../components/Picker';
import { PickerWrapper } from '../misc';

export default {
  title: 'Picker',
  component: Picker,
  tags: ['autodocs'],
};

export const Default = (args) => (
  <>
    <PickerWrapper>
      <Picker {...args} />
    </PickerWrapper>
  </>
)
Default.args = {
  isFixedWidth: false,
  icon: <FontAwesomeIcon icon="calendar-alt" size='lg' color='black' />,
  dropdownDirection: "right"
}

export const WithChildren = Default.bind({});
WithChildren.args = {
  children : (
    <FontAwesomeIcon icon="share-alt" size="lg" color="black"/>
  )
}