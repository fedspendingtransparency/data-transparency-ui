import React from 'react';

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