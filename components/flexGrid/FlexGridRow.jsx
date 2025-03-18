import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { createClassString } from '../../helpers/flexGridHelper';

require('../../styles/components/_flexGrid.scss');

const GridRow = ({
    children,
    className,
    hasGutter = false,
    gutterSize,
    ...props
}) => {
    const gutterClass = hasGutter ? `usa-dt-flex-grid__gutter` : '';
    const gutterSizeClass = cx({
        'usa-dt-flex-grid__gutter-sm': gutterSize === 'sm',
        'usa-dt-flex-grid__gutter-lg': gutterSize === 'lg'
    });

    return (
        <div
            className={createClassString(['usa-dt-flex-grid__row', gutterClass, gutterSizeClass, className])}
            {...props}>
            {children}
        </div>
    );
};

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
export default GridRow;
