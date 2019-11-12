import React from 'react';
import { configure } from '@storybook/react';
import { addParameters, addDecorator } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faAngleRight,
  faBook,
  faBuilding,
  faCalendarAlt,
  faChartArea,
  faChartBar,
  faChartPie,
  faCheckSquare,
  faChevronDown,
  faChevronUp,
  faEllipsisH,
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
  faUserTie
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngleDown,
  faAngleRight,
  faBook,
  faBuilding,
  faCalendarAlt,
  faChartArea,
  faChartBar,
  faChartPie,
  faCheckSquare,
  faChevronDown,
  faChevronUp,
  faEllipsisH,
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
  faUserTie
);
import dataTransparencyUiTheme from './theme';
  
require('../styles/main.scss');

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
      if (obj.kind === 'Welcome') return -1;
      if (obj2.kind === 'Welcome') return 1;
      return 1;
    }
  }
});

addDecorator((storyFn) => {
  return (
    <div style={{ textAlign: "center" }}>{storyFn()}</div>
  );
});

configure(require.context('./stories', true, /\.stories\.js$|mdx$/), module);