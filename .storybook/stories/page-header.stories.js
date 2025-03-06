import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import PageHeader from '../../components/PageHeader';
import ComingSoon from '../../components/messages/ComingSoon';
import ShareIcon from '../../components/ShareIcon';
import DownloadIconButton from '../../components/DownloadIconButton';
import FiscalYearPicker from '../../components/FiscalYearPicker';
import { InPageNavWrapper, Tooltip } from '../misc';

export default {
  title: 'Page Header',

  parameters: {
    options: {
      showAddonPanel: false,
    },
  },
};

export const WAllToolbarOptions = () => (
  <div className="page-header-story">
    <PageHeader
      overLine="Agency Profile"
      title="Department of Homeland Security"
      toolBar={[
        <FiscalYearPicker selectedFy={2020} latestFy={2021} handleFyChange={() => {}} />,
        <ShareIcon url="this-is-a-test-url.com" />,
        <DownloadIconButton
          onClick={() => {}}
          downloadInFlight={boolean('Download In Flight', false)}
          tooltipComponent={<Tooltip />}
          isEnabled={boolean('Download Enabled', true)}
        />,
      ]}
    />
    <ComingSoon />
  </div>
);

WAllToolbarOptions.story = {
  name: 'w/ All Toolbar Options',
};

export const WInPageNav = () => (
  <div className="page-header-story">
    <InPageNavWrapper>
      <PageHeader
        title="About"
        pageName="about"
        sections={[
          {
            section: 'mission',
            label: 'Start: Mission1',
          },
          {
            section: 'background',
            label: 'Background2',
          },
          {
            section: 'development',
            label: 'Development and Releases3',
          },
        ]}
        inPageNav
      />
    </InPageNavWrapper>
    <div
      id="about-mission"
      style={{
        height: '200px',
        margin: '24px',
        border: '2px solid blue',
      }}
    >
      Mission
    </div>
    <div
      id="about-background"
      style={{
        height: '200px',
        margin: '24px',
        border: '2px solid red',
      }}
    >
      Background
    </div>
    <div
      id="about-development"
      style={{
        height: '200px',
        margin: '24px',
        border: '2px solid green',
      }}
    >
      Development
    </div>
  </div>
);

WInPageNav.story = {
  name: 'w/ InPageNav',
};
