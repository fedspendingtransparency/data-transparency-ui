/**
 * inPageNavHelper-test.js
 * Created by Andrea Blackwell 2/12/2024
 */

import { checkIsOverflow } from '../../helpers/inPageNavHelper';
import { JSDOM } from 'jsdom';

let dom = new JSDOM('<!DOCTYPE html>'), doc = dom.window.document;
let mockElement = doc.createElement('div');
mockElement.innerHTML = `
   <ul style="width: 100px">
       <li><a>Apple</a></li>
       <li><a>Banana</a></li>
       <li><a>Orange</a></li>
   </ul>
`;

const setGetBoundingRect = (elArray, index, left, right, x) => {
   return elArray[index].getBoundingClientRect = jest.fn(() => {
      return {
         width: 50,
         height: 120,
         top: 0,
         left: left,
         bottom: 60,
         right: right,
         x: x,
         y: 150
      }
   });
}
describe("In Page Nav Helper functions", () => {
   it("should return the left as overflow true and right is not in overflow", () => {
      const elArray = [...mockElement.childNodes];
      setGetBoundingRect(elArray,0, -20, 30, 40);
      setGetBoundingRect(elArray, elArray.length - 1, 300, 350, 200);
      jest.spyOn(mockElement, "clientWidth", "get").mockImplementation(() => 1000);
      jest.spyOn(mockElement, "scrollLeft", "get").mockImplementation(() => -10);
      jest.spyOn(mockElement, "scrollWidth", "get").mockImplementation(() => 400);
      const padding = 10;
      const result = checkIsOverflow(mockElement, padding);
      expect(result.left).toEqual(true);
      expect(result.right).toEqual(false);
   });

   it("should return the left is not in overflow and right is not in overflow", () => {
      const elArray = [...mockElement.childNodes];
      setGetBoundingRect(elArray,0, 20, 30, 40);
      setGetBoundingRect(elArray, elArray.length - 1, 300, 350, 200);
      jest.spyOn(mockElement, "clientWidth", "get").mockImplementation(() => 1000);
      jest.spyOn(mockElement, "scrollLeft", "get").mockImplementation(() => 0);
      jest.spyOn(mockElement, "scrollWidth", "get").mockImplementation(() => 400);
      const padding = 10;
      const result = checkIsOverflow(mockElement, padding);
      expect(result.left).toEqual(false);
      expect(result.right).toEqual(false);
   });

   it("should return the left in not in overflow and right is in overflow", () => {
      const elArray = [...mockElement.childNodes];
      setGetBoundingRect(elArray,0, 20, 30, 40);
      setGetBoundingRect(elArray, elArray.length - 1, 300, 350, 200);
      jest.spyOn(mockElement, "clientWidth", "get").mockImplementation(() => 1000);
      jest.spyOn(mockElement, "scrollLeft", "get").mockImplementation(() => 0);
      jest.spyOn(mockElement, "scrollWidth", "get").mockImplementation(() => 0);
      const padding = 10;
      const result = checkIsOverflow(mockElement, padding);
      expect(result.left).toEqual(false);
      expect(result.right).toEqual(true);
   });
});



