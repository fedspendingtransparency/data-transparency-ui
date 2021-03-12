/** Declaration file generated by dts-gen */
import * as React from 'react';

/*~ You can declare types that are available via importing the module */

export interface PaginationProps {
    changePage: (page: number) => void,
    totalItems: number,
    currentPage?: number,
    pageSize?: number,
    resultsText?: boolean | JSX.Element,
    limitSelector?: boolean,
    changeLimit?: (limit: number) => void,
    goToPage?: boolean
}

interface tooltipWrapperControlledProps {
    isControlled?: boolean,
    showTooltip?: (bool: boolean) => void,
    closeTooltip?: (bool: boolean) => void,
    isVisible?: boolean
}

interface tooltipWrapperOffsetAdjustmentsProps {
    top?: number,
    right?: number,
    left?: number
}

export interface TooltipWrapperProps {
    className?: string,
    children?: JSX.Element,
    tooltipComponent?: JSX.Element,
    left?: boolean,
    wide?: boolean,
    icon?: string,
    controlledProps?: tooltipWrapperControlledProps,
    offsetAdjustments?: tooltipWrapperOffsetAdjustmentsProps,
    styles?: any
}

export interface QuarterPickerProps {
    handleSelection: (quarter: number) => void,
    selectedQuarters: Array<string>,
    disabledQuarters: Array<string>,
    selectedPeriods: Array<string>,
    disabledPeriods: Array<string>,
    periodsPerQuarter: Array<[object]>,
    isCumulative: boolean,
    showPeriods: boolean
}

interface LoadingMessageProps {
    loadingText: string
};

interface PickerPropsOptions {
    name: string | number,
    value: string | number
    onClick: (value: string | number) => void,
    classNames?: string
}

export interface PickerProps {
    sortFn: (a:any, b:any) => Array<any>,
    icon: JSX.Element,
    selectedOption: string,
    className: string,
    id: string,
    options: PickerPropsOptions,
    dropdownDirection: string,
    isFixedWidth: boolean,
    children: Array<JSX.Element> | JSX.Element
}

interface SearchBarProps {
    onSearch: (value: string) => void,
    minChars: number,
    isDisabled: boolean,
    throttleOnChange: number,
    inputTitle: string
}

export interface SearchBarProps {
  onSearch: (value: string) => void,
  minChars: number,
  isDisabled: boolean,
  throttleOnChange: number,
  inputTitle: string
}

interface TabsProps {
  types: Array<[object]>
  active: string,
  switchTab: (value: string) => void
  tabsClassName: string
  tablessStyle: boolean
}

export interface TabsProps {
  types: Array<[object]>
  active: string,
  switchTab: (value: string) => void
  tabsClassName: string,
  tablessStyle: boolean
}

interface TooltipComponentTextAlign {
    title?: string,
    text?: string
}

export interface TooltipComponentProps {
    title: string,
    children: Array<JSX.Element> | JSX.Element,
    className: string,
    textAlign: TooltipComponentTextAlign
}

interface tableCurrentSortProps {
    direction: string,
    field: string
}

export interface TableProps {
    columns: Array<Object>,
    rows: Array<Object|[]>,
    currentSort: tableCurrentSortProps,
    updateSort: (title: string, direction: string) => void,
    expandable: boolean,
    divider: string,
    classNames: string
}

export interface GenericMessageProps {
    title: string,
    description: string,
    icon: object,
    className: string
}

export interface SectionTitleProps {
    children: JSX.Element,
    defaultExpandedState: boolean,
    overLine: string,
    controlledProps: object,
    description: JSX.Element,
    titleTooltip: object,
    descTooltip: object,
    isCollapsible: boolean,
    isComingSoon: boolean,
    isLoading: boolean,
    isError: boolean,
    errorMsg: string,
    classNames: string,
    id: string
    title: string,
    icon: JSX.Element,
    className: string
}

export interface ErrorMessageProps {
    description: string
}

/*~ If this module has methods, declare them as functions like so.
 */
export class Pagination extends React.Component<PaginationProps>{}
export class TooltipWrapper extends React.Component<TooltipWrapperProps>{}
export class QuarterPicker extends React.Component<QuarterPickerProps>{}
export function Picker(props: PickerProps): JSX.Element;
export function SearchBar(props: SearchBarProps): JSX.Element;
export function Tabs(props: TabsProps): JSX.Element;
export function TooltipComponent(props: TooltipComponentProps): JSX.Element;
export function Table(props: TableProps): JSX.Element;
export function GenericMessage(props: GenericMessageProps): JSX.Element;
export function LoadingMessage(props: LoadingMessageProps): JSX.Element;
export function ErrorMessage(props: ErrorMessageProps): JSX.Element;
export function SectionTitle(props: SectionTitleProps): JSX.Element;
export function useCumulativeQuarterPicker(initialState: Array<string>): [Array<string>, () => void]
/*~ If there are types, properties, or methods inside dotted names
 *~ of the module, declare them inside a 'namespace'.
 */
// export namespace Helpers {
//     /*~ For example, given this definition, someone could write:
//      *~   import { subProp } from 'yourModule';
//      *~   subProp.foo();
//      *~ or
//      *~   import * as yourMod from 'yourModule';
//      *~   yourMod.subProp.foo();
//      */
//     namespace MoneyFormatter {
//         function foo(): void;
//     }
// }
