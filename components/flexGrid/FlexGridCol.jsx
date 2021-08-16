import React from 'react';
import PropTypes from 'prop-types';
import { createClassString } from '../../helpers/flexGridHelper';

require('../../styles/components/_flexGrid.scss');

export default function GridCol({
  children,
  className,
  desktop,
  mobile,
  tablet,
  width,
  ...props
}) {
  const generateClass = ([breakpoint, colWidth]) => {
    if (colWidth !== undefined) {
      // offsetting column classes - requires span and offset
      if(colWidth.span !== undefined && colWidth.offset !== undefined){
        const spanClass = `${breakpoint ? `${breakpoint}:` : ''}grid-col-${colWidth.span}`;
        const offsetClass = `${breakpoint ? `${breakpoint}:` : ''}grid-offset-${colWidth.offset}`;
        return createClassString([spanClass, offsetClass]);
      }
      if(colWidth.order !== undefined){
        const spanClass = `${breakpoint ? `${breakpoint}:` : ''}grid-col-${colWidth.span}`;
        const orderClass = `${breakpoint ? `${breakpoint}:` : ''}order-${colWidth.order}`;
        return createClassString([spanClass, orderClass]);
      }
      // default column class
      return `${breakpoint ? `${breakpoint}:` : ''}grid-col-${colWidth}`;
    }
    return '';
  }

  const baseClasses = [
    [null, width],
    ['desktop', desktop],
    ['tablet', tablet],
    ['mobile-lg', mobile]
  ].map(generateClass);

  const allClasses = createClassString([...baseClasses, className]);

  return (
    <div className={allClasses ? allClasses : 'grid-col'} {...props}>
      {children}
    </div>
  );
}

GridCol.propTypes = {
  children: PropTypes.node,
  /** Any additional classes to apply */
  className: PropTypes.string,
  /** Width to use at the desktop breakpoint */
  desktop: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["auto", "fill"]),
    PropTypes.shape({
      span: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["auto", "fill"])
      ]),
      offset: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      order: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["first", "last"])
      ])
    })
  ]),
  /** Width to use at the tablet breakpoint */
  tablet: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["auto", "fill"]),
    PropTypes.shape({
      span: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["auto", "fill"])
      ]),
      offset: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      order: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["first", "last"])
      ])
    })
  ]),
  /** Width to use at the mobile breakpoint */
  mobile: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["auto", "fill"]),
    PropTypes.shape({
      span: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["auto", "fill"])
      ]),
      offset: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      order: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["first", "last"])
      ])
    })
  ]),
  /** Default width to use */
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["auto", "fill"]),
    PropTypes.shape({
      span: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["auto", "fill"])
      ]),
      offset: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]),
      order: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["first", "last"])
      ])
    }),
  ])
};
