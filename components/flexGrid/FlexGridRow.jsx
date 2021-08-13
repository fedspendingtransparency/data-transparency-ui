import React from 'react';
import PropTypes from 'prop-types';
import { createClassString } from '../../helpers/flexGridHelper';
import cx from 'classnames';

export default function GridRow({
  children,
  className,
  hasGaps,
  gapSize,
  ...props
}) {
  const gapClass = hasGaps ? `grid-gap` : '';
  const gapSizeClass = cx({
    'grid-gap-sm': gapSize === 'sm',
    'grid-gap-lg': gapSize === 'lg'
  });

  return (
    <div
      className={createClassString(['grid-row', gapClass, gapSizeClass, className])}
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
  /** Should the row have gaps between its columns? */
  hasGaps: PropTypes.bool,
  /**
   * Size of the gaps.
   * The `hasGaps` prop must be `true` for this to have an effect.
   */
  gapSize: PropTypes.oneOf(["sm", "lg"])
};

GridRow.defaultProps = {
  hasGaps: false
};
