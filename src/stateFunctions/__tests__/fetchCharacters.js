import fetchCharacters from "../fetchCharacters";

const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status: status,
    statusText: statusText,
    headers: {
      "Content-type": "application/json"
    }
  });
};

const initialStore = { name: "obi", characters: [] };

it("calls request and success actions if the fetch response was successful", () => {
  window.fetch = jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve(
        mockResponse(200, null, `{"results": [ {"name": "Darth Vader"}]}`)
      )
    );
  return fetchCharacters(initialStore, "Darth Vader").then(updatedStore => {
    expect(updatedStore).toEqual({
      name: "",
      characters: [{ name: "Darth Vader" }]
    });
  });
});

it("calls request and failure actions if the fetch response was not successful", () => {
  window.fetch = jest
    .fn()
    .mockImplementation(() =>
      Promise.resolve(
        mockResponse(
          400,
          "Test Error",
          `{"status":400, "statusText": Test Error!}`
        )
      )
    );
});
