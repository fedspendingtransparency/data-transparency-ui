import React, { useState } from 'react';

import TooltipComponent from "../components/infoTooltip/TooltipComponent";

export const Tooltip = () => (
    <TooltipComponent title="An Example Tooltip" textAlign={{ title: 'left', text: 'left'}}>
      <React.Fragment>
        <p>Here are some random words serving the purpose of illustrating how the tooltip component works</p>
        <p>Its really pretty neat and easy to use. I think you are gonna like it a ton.</p>
        <p>You are welcome.</p>
        <strong>Some Bold Text That is like a Header</strong>
          <p>
            Some text that is not apart of the header but underneath it.
          </p>
        <ul>
          <li>Some List Item</li>
          <li>Some List Item</li>
          <li>Some List Item</li>
          <li>
            <strong>Some Bold Text That is like a Header</strong> --
              Some List Item
        </li>
        </ul>
        <p>More Paragraph</p>
      </React.Fragment>
    </TooltipComponent>
  );

export const PaginationWrapper = (props) => {
  const [page, changePage] = useState(1);
  const [pageSize, changeLimit] = useState(10);

  const handlePageChange = (pg) => {
    console.log("changePage handler invoked w/ this parameter: ", pg);
    changePage(pg);
  };

  const handleChangeLimit = (pageSize) => {
    console.log("changeLimit handler invoked w/ this parameter: ", pageSize);
    changeLimit(pageSize);
  }

  return (
    <div className="story__container">
      {React.cloneElement(props.children, {
        changePage: handlePageChange,
        currentPage: page,
        changeLimit: handleChangeLimit,
        pageSize,
        ...props
      })}
    </div>
  );
};

export const QuarterPickerWrapper = (props) => {
  const [selectedQuarters, setSelectedQuarters] = useState([]);
  const [selectedPeriods, setSelectedPeriods] = useState([]);

  const handlePickQuarter = (newlySelected) => {
    if (selectedQuarters.includes(newlySelected)) {
      setSelectedQuarters(selectedQuarters.filter((quarter) => quarter !== newlySelected))
    }
    else {
      setSelectedQuarters([...new Set([...selectedQuarters, newlySelected])])
    }
  }

  return (
      <div className="story__container quarter-picker-story">
          {React.cloneElement(props.children, {
            handleSelection: handlePickQuarter,
            selectedQuarters,
            ...props
          })}
      </div>
  );
};

export const QuarterPickerCumulative = (props) => {
  const [selectedQuarters, setSelectedQuarters] = useState([]);

  const handleSelection = (selectedQuarter) => {
    const selectedQuarterAsInt = parseInt(selectedQuarter, 10);
    const previousPeriodToNew = `${selectedQuarterAsInt - 1}`;
    const isSelectedPeriodActive = selectedQuarters.some((period) => parseInt(period, 10) >= selectedQuarterAsInt)
    const newPeriods = selectedQuarters
      .map((period) => parseInt(period, 10))
      .filter((period) => period < selectedQuarterAsInt)
      .map((period) => `${period}`)
    
    const shouldAddPreviousPeriod = (
      isSelectedPeriodActive &&
      !newPeriods.includes(previousPeriodToNew)
    );
    
    if (shouldAddPreviousPeriod) {
      // b/c this is cumulative, the selected period was previously treated as selected
      // so we should toggle the selection off rather than periods was previously selected,
      setSelectedQuarters(
        newPeriods
        .concat([previousPeriodToNew])
        .filter((period) => parseInt(period, 10) > 0)
      )
    }
    else if (isSelectedPeriodActive) {
      setSelectedQuarters(newPeriods);
    }
    else {
      setSelectedQuarters(newPeriods.concat([selectedQuarter]));
    }
  }

  return (
      <div className="story__container quarter-picker-story">
          {React.cloneElement(props.children, {
            handleSelection,
            selectedQuarters,
            ...props
          })}
      </div>
  );
};

export const QuarterPickerWithPeriods = (props) => {
  const [selectedPeriods, setSelectedPeriods] = useState([]);

  const handleSelection = (selectedPeriod) => {
    const selectedPeriodAsInt = parseInt(selectedPeriod, 10);
    const previousPeriodToNew = `${selectedPeriodAsInt - 1}`;
    const isSelectedPeriodActive = selectedPeriods.some((period) => parseInt(period, 10) >= selectedPeriodAsInt)
    const newPeriods = selectedPeriods
      .map((period) => parseInt(period, 10))
      .filter((period) => period < selectedPeriodAsInt)
      .map((period) => `${period}`)
    
    const shouldAddPreviousPeriod = (
      isSelectedPeriodActive &&
      !newPeriods.includes(previousPeriodToNew)
    );
    
    if (shouldAddPreviousPeriod) {
      // b/c this is cumulative, the selected period was previously treated as selected
      // so we should toggle the selection off rather thanperiods was previously selected,
      setSelectedPeriods(
        newPeriods
        .concat([previousPeriodToNew])
        .filter((period) => parseInt(period, 10) > 0)
      )
    }
    else if (isSelectedPeriodActive) {
      setSelectedPeriods(newPeriods);
    }
    else {
      setSelectedPeriods(newPeriods.concat([selectedPeriod]));
    }
  }

  return (
      <div className="story__container quarter-picker-story">
          {React.cloneElement(props.children, {
            handleSelection,
            selectedPeriods,
            ...props
          })}
      </div>
  );
};

export const PickerWrapper = (props) => {
  const [selectedOption, onClick] = useState('All');

  const options = [
    { name: 'All', onClick },
    { name: 'Department of Transportation', onClick },
    { name: 'Department of State', onClick },
    { name: 'Department of International Affairs', onClick },
    { name: 'National Credit Union Administration', onClick },
    { name: 'Federal Breau of Invesitgation', onClick },
    { name: 'Department of Health and Human Services', onClick }
  ];


  return (
    <div className="story__container picker-story">
        {React.cloneElement(props.children, {
          selectedOption,
          onClick,
          options,
          ...props.children.props
        })}
    </div>
  );
}

export const TableWrapper = (props) => {
  const [field, updateField] = useState('amount');
  const [direction, updateDirection] = useState('desc');
  const updateSort = (field, direction) => {
    console.log(`update sort invoked with ${field}, ${direction}`);
    updateField(field);
    updateDirection(direction)
  };
  const currentSort = {
    field,
    direction
  };
  const columns = [
    {
        title: 'name',
        displayName: 'Budget Function'
    },
    {
        title: 'amount',
        displayName: 'Amount'
    },
    {
        title: 'percent',
        displayName: '% of Total Amount',
        right: true
    }
  ];

  return (
    <div className="story__container table-story">
        {React.cloneElement(props.children, {
          updateSort,
          currentSort,
          columns,
          ...props.children.props
        })}
    </div>
  );
}

// For the table without sorting
export const BasicTableWrapper = (props) => {
  const columns = [
    {
        title: 'name',
        displayName: 'Budget Function'
    },
    {
        title: 'amount',
        displayName: 'Amount'
    },
    {
        title: 'percent',
        displayName: '% of Total Amount',
        right: true
    }
  ];

  return (
    <div className="story__container table-story">
        {React.cloneElement(props.children, {
          columns,
          ...props.children.props
        })}
    </div>
  );
}
