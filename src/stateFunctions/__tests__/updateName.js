import updateName from "../updateName";

const initialState = { name: "Darth" };
const newState = updateName(initialState, "Vader");

describe("updateName", () => {
  it("calls request and success actions if the fetch response was successful", () => {
    expect(newState).toEqual({ name: "Vader" });
  });
});
