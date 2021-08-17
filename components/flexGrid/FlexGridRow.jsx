import React from 'react';
import PropTypes from 'prop-types';
import { createClassString } from '../../helpers/flexGridHelper';
import cx from 'classnames';

require('../../styles/components/_flexGrid.scss');

export default function GridRow({
  children,
  className,
  hasGutter,
  gutterSize,
  ...props
}) {
  const gutterClass = hasGutter ? `usa-dt-flex-grid__gutter` : '';
  const gutterSizeClass = cx({
    'usa-dt-flex-grid__gutter-sm': gutterSize === 'sm',
    'usa-dt-flex-grid__gutter-lg': gutterSize === 'lg'
  });

  return (
    <div
      className={createClassString(['usa-dt-flex-grid__row', gutterClass, gutterSizeClass, className])}
      {...props}
    >
      {children}
    </div>
  );
}

GridRow.propTypes = {
  children: PropTypes.node.isRequired,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Should the row have gutters between its columns? */
  hasGutter: PropTypes.bool,
  /**
   * Size of the gutter.
   * The `hasGutter` prop must be `true` for this to have an effect.
   */
  gutterSize: PropTypes.oneOf(["sm", "lg"])
};

GridRow.defaultProps = {
  hasGutter: false
};
