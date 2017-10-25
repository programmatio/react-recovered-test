import React from 'react';
import { shallow } from 'enzyme';
import CharacterSearch from '../CharacterSearch';

const mockNameUpdate = jest.fn();
const mockHandleFetchCharacters = jest.fn();

const props = {
  name: '',
  handleNameUpdate: mockNameUpdate,
  handleFetchCharacters: mockHandleFetchCharacters,
};

const wrapper = shallow(<CharacterSearch {...props} />);

describe("<CharacterSearch />", () => {
  it("should match the snapshot", function() {
    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger mock function onChange ", () => {
    wrapper.find('[type="text"]').simulate("change");
    expect(mockNameUpdate.mock.instances.length).toEqual(1);
  });

  it("should trigger mock function on submission", () => {
    wrapper.find("form").simulate("submit");
    expect(mockHandleFetchCharacters.mock.instances.length).toEqual(1);
  });

  it("should trigger mock function on button click", () => {
    wrapper.find("button").simulate("click");
    expect(mockHandleFetchCharacters.mock.instances.length).toEqual(2);
  });
});
