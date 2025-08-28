import React from 'react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
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

// where global scss styles get applied
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
    element: 'body',
    config: {},
    options: {},
    test: 'todo'
  },
  globals: {
    a11y: {
      // Optional flag to prevent the automatic check
      manual: true,
    },
  },
};

export const decorators = [
  (storyFn) => <div style={{ width: "100%" }}>{storyFn()}</div>,
];
export const tags = ['autodocs'];
