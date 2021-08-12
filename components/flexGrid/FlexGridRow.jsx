import React from 'react';
import PropTypes from 'prop-types';
import { createClassString } from '../../helpers/flexGridHelper';

export default function GridRow({
  children,
  className,
  gaps,
  gapSize,
  ...props
}) {
  const gapClass = gaps ? `grid-gap-${gapSize}` : '';

  return (
    <div
      className={createClassString(['grid-row', gapClass, className])}
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
  gaps: PropTypes.bool,
  /**
   * Size of the gaps.
   * The `gaps` prop must be `true` for this to have an effect.
   */
  gapSize: PropTypes.number
};

GridRow.defaultProps = {
  gaps: false,
  gapSize: 4
};
