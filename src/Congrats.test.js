import Enzyme, { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../test/utils";

import Congrats from "./Congrats";
import EnzymeAdapter from "enzyme-adapter-react-16";
import React from "react";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

it("renders without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});

it("renders no text when 'success' prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});

it("renders non-empty congrats message when 'success' is true", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, "congrats-message");
  expect(component.text()).not.toBe(0);
});

it("does not throw warning with expected props", () => {
  const expectedProps = { success: true };
  checkProps(Congrats, expectedProps);
});
