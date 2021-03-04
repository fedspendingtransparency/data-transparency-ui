import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Tabs from '../../components/tabs/Tabs';



const defaultProps = {
    types: [
        {
          internal: 'name',
          label: 'Names'
        },
        {
          internal: 'dates',
          label: 'Dates',
          count: 23,
          tooltip: (<div>:wave:</div>)
        }
    ],
    active: 'name',
    switchTab: () => {}
};

const switchTab = (tab) => {
  defaultProps.active = tab
};

describe('SearchBar', () => {
    defaultProps.switchTab = 
    beforeEach(() => {
        defaultProps.active = 'name';
        defaultProps.switchTab = switchTab;
    });
    describe('Dom Nodes', () => {
        it('it should show default active tab', () => {
          render(<Tabs {...defaultProps} />);
          expect(screen.getByTitle('Show Names').classList.contains('active')).toBeTruthy();
        });
        it('it should switch tab', async () => {
          const { rerender } = render(<Tabs {...defaultProps} />);
          fireEvent.click(screen.getByTitle('Show Dates'));
          rerender(<Tabs {...defaultProps} />);
          expect(screen.getByTitle('Show Dates').classList.contains('active')).toBeTruthy();
        });
        it('it should show counts', () => {
          render(<Tabs {...defaultProps} />);
          expect(screen.getByText('23')).toBeTruthy();
        });
        it('it should show tooltip', () => {
          render(<Tabs {...defaultProps} />);
          expect(screen.getByRole('button').classList.contains('tooltip__hover-wrapper')).toBeTruthy();
        });
        it('it should not switch tab when tab is disabled', async () => {
          defaultProps.types[1] = { internal: 'dates', label: 'Dates', disabled: true };
          console.log(' Default Props : ', defaultProps);
          const { rerender } = render(<Tabs {...defaultProps} />);
          fireEvent.click(screen.getByTitle('Show Dates'));
          rerender(<Tabs {...defaultProps} />);
          expect(screen.getByTitle('Show Dates').classList.contains('active')).toBeFalsy();
        });
    });
});
