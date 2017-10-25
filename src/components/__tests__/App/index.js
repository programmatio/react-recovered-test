import React from "react";
import { shallow } from "enzyme";
import App from "../../App";
import CharacterSearch from "../../CharacterSearch";
import CharacterDetails from "../../CharacterDetails";
const wrapper = shallow(<App />);

describe("<App />", () => {
  it("should match the snapshot", function() {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the <CharacterSearch/>", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CharacterSearch).length).toBe(1);
  });

  it("should render the  <CharacterDetails/>", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CharacterDetails).length).toBe(1);
  });
});
