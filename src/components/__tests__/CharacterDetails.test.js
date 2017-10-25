import React from "react";
import { shallow } from "enzyme";
import CharacterDetails from "../CharacterDetails";
import Character from "../Character";

describe("<CharacterDetails /> without Characters", () => {
  const props = {
    characters: []
  };
  const wrapper = shallow(<CharacterDetails {...props} />);
  it("should match the snapshot", function() {
    expect(wrapper).toMatchSnapshot();
  });
  it("should not have any definition lists without any characters in the array", function() {
    expect(wrapper.find(Character).length).toBe(0);
  });
  it('should have text paragraph with "Nothing to display" message', function() {
    expect(wrapper.find("p").text()).toEqual("Nothing to display");
  });
});

describe("<CharacterDetails /> with Characters", () => {
  const props = {
    characters: [
      {
        name: "test",
        height: "test",
        hair_color: "test",
        eye_color: "test"
      },
      {
        name: "test",
        height: "test",
        hair_color: "test",
        eye_color: "test"
      }
    ]
  };

  const wrapperWithCharacters = shallow(<CharacterDetails {...props} />);

  it("should show characters", function() {
    expect(wrapperWithCharacters.find(Character).length).toBe(2);
  });
  it('should not have text paragraph with "Nothing to display" message', function() {
    expect(wrapperWithCharacters.find("p").length).toBe(0);
  });
});
