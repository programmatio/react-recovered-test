import React from "react";
import { shallow } from "enzyme";
import Character from "../Character";

const props = {
  character: {
    name: "test",
    height: "test",
    hair_color: "test",
    eye_color: "test"
  }
};
const wrapper = shallow(<Character {...props} />);

describe("<Character />", () => {
  it("should match the snapshot", function() {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render definition list", function() {
    expect(wrapper.find("dl").length).toBe(1);
  });
});
