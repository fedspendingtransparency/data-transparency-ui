import React from 'react';
import { withConsole } from '@storybook/addon-console';
import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
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

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    name: 'Data Transparency UI',
    // theme: dataTransparencyUiTheme
    storySort: (a, b) => {
      const [className, obj] = a;
      const [className2, obj2] = b;
      if (obj.kind === 'Introduction') return -1;
      if (obj2.kind === 'Introduction') return 1;
      if (obj.kind === 'Components/Flex Grid/Flex Grid Container') return 0;
      if (obj.kind === 'Components/Flex Grid/Flex Grid Row') return 0;
      if (obj2.kind === 'Components/Flex Grid/Flex Grid Col') return 0;
      return 1;
    },
    showAddonPanel: true
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
});

addDecorator(
  (storyFn) => <div style={{ width: "100%" }}>{storyFn()}</div>,
  (storyFn, context) => withConsole()(storyFn)(context)
);
