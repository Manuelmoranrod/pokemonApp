import React from "react";
import { shallow } from "enzyme";
import First from "./First";

describe("First", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<First />);
    expect(wrapper).toMatchSnapshot();
  });
});
