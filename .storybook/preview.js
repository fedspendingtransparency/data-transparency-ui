import React from 'react';
import { withConsole } from '@storybook/addon-console';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faBook,
  faBuilding,
  faCalendarAlt,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faChartArea,
  faChartBar,
  faChartPie,
  faCheckSquare,
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faEllipsisH,
  faExclamationTriangle,
  faExternalLinkAlt,
  faHandsHelping,
  faInfo,
  faInfoCircle,
  faLandmark,
  faLevelUpAlt,
  faMapMarkerAlt,
  faMinusSquare,
  faPencilAlt,
  faSearch,
  faSitemap,
  faSpinner,
  faSquare,
  faTable,
  faTag,
  faThLarge,
  faTimes,
  faUserTie,
  faShareAlt,
  faMapMarker
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faBook,
  faBuilding,
  faCalendarAlt,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCaretUp,
  faChartArea,
  faChartBar,
  faChartPie,
  faCheckSquare,
  faChevronDown,
  faChevronUp,
  faChevronRight,
  faEllipsisH,
  faExclamationTriangle,
  faExternalLinkAlt,
  faHandsHelping,
  faInfo,
  faInfoCircle,
  faLandmark,
  faLevelUpAlt,
  faMapMarkerAlt,
  faMinusSquare,
  faPencilAlt,
  faSearch,
  faSitemap,
  faSpinner,
  faSquare,
  faTable,
  faTag,
  faThLarge,
  faTimes,
  faUserTie,
  faShareAlt,
  faMapMarker
);
import dataTransparencyUiTheme from './theme';

import '../styles/storybook.scss';

export const parameters = {
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    name: 'Data Transparency UI',
    storySort: (a, b) => {
      if (a.title === 'Introduction') return -1;
      if (a.title === 'Introduction') return 1;
      if (a.title === 'Components/Flex Grid/Flex Grid Container') return 0;
      if (a.title === 'Components/Flex Grid/Flex Grid Row') return 0;
      if (b.title === 'Components/Flex Grid/Flex Grid Col') return 0;
      return 1;
    },
    showAddonPanel: true,
    tags: ['autodocs']
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: true,
  },
};

export const decorators = [
  (storyFn) => <div style={{ width: "100%" }}>{storyFn()}</div>,
  (storyFn, context) => withConsole()(storyFn)(context)
];
export const tags = ['autodocs'];
