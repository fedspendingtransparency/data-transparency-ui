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
            pickedQuarter: handlePickQuarter,
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
    const newPeriods = selectedPeriods
      .map((period) => parseInt(period, 10))
      .filter((period) => period < selectedPeriodAsInt)
      .map((period) => `${period}`)
    
    if (selectedPeriods.includes(selectedPeriod)) {
      setSelectedPeriods(newPeriods);
      const previousPeriodToNew = `${selectedPeriodAsInt - 1}`;
      if (!newPeriods.includes(previousPeriodToNew)) {
        // w/ one item '5' in the array, b/c it's cumulative
        // 5 periods are counted as selected
        // so we trigger a new selection of '4' -- if it's not in the array -- otherwise, we'd have no items in the array.
        handleSelection(previousPeriodToNew);
      }
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
