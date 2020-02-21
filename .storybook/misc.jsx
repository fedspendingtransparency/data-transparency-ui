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

  const handlePickQuarter = (newlySelectedQuarter) => {
    if (selectedQuarters.includes(newlySelectedQuarter)) {
      setSelectedQuarters(selectedQuarters.filter((quarter) => quarter !== newlySelectedQuarter))
    }
    else {
      setSelectedQuarters([...new Set([...selectedQuarters, newlySelectedQuarter])])
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