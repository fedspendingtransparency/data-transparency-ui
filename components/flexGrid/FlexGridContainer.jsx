import React from 'react';
import PropTypes from 'prop-types';
import { createClassString } from '../../helpers/flexGridHelper';

require('../../styles/components/_flexGrid.scss');

export default function GridContainer({ children, className, ...props }) {
  return (
    <div
      className={createClassString(['usa-dt-flex-grid__container', className])}
      {...props}
    >
      {children}
    </div>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string
};
