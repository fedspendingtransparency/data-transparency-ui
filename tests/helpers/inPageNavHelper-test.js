/**
 * inPageNavHelper-test.js
 * Created by Andrea Blackwell 2/12/2024
 */

import { checkIsOverflow } from '../../helpers/inPageNavHelper';
import { JSDOM } from 'jsdom';

let dom = new JSDOM('<!DOCTYPE html>'), doc = dom.window.document;

let text = doc.createTextNode('here is some text');

let div = doc.createElement('div');
const getMockElement = (width) => {
   div.innerHTML = `
<ul style=${width}>
    <li className="usda-in-page-nav__element active"><a role="button" tabIndex="0">Overview</a></li>
    <li className="usda-in-page-nav__element "><a role="button" tabIndex="0">Status of Funds</a></li>
    <li className="usda-in-page-nav__element "><a role="button" tabIndex="0">Award Spending</a></li>
</ul>
`

   return div;
};



describe("In Page Nav Helper functions", () => {
   it("should return the left and right overflow status of the ul element", () => {
      const testMockElement = getMockElement('width: 100px');
      const elArray = [...testMockElement.childNodes];
      elArray[0].getBoundingClientRect = jest.fn(() => {
          return {
             width: 120,
             height: 120,
             top: 0,
             left: 0,
             bottom: 60,
             right: 40,
          }
       }); //100px wide, 500px tall

      elArray[elArray.length - 1].getBoundingClientRect = jest.fn(() => {
         return {
            width: 120,
            height: 120,
            top: 0,
            left: 80,
            bottom: 60,
            right: 100,
         }
      }); //100px wide, 500px tall

      const padding = 10;
      const result = checkIsOverflow(testMockElement, padding);
      expect(result.left).toEqual(false);
      expect(result.right).toEqual(true);
   });
});
