import React from "react";
import PropTypes from "prop-types";

const CharacterSearch = ({ name, handleNameUpdate, handleFetchCharacters }) => {
  return (
    <div>
      <form onSubmit={e => handleFetchCharacters(e)}>
        <label>
          Search Starwars Character by Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => handleNameUpdate(e)}
          />
        </label>
        <button onClick={e => handleFetchCharacters(e)}>Search</button>
      </form>
    </div>
  );
};

CharacterSearch.props = {
  name: PropTypes.string.isRequired,
  handleNameUpdate: PropTypes.func.isRequired,
  handleFetchCharacters: PropTypes.func.isRequired
};

export default CharacterSearch;
