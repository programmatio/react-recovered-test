import React from "react";
import PropTypes from "prop-types";

import Character from "./Character";
const CharacterDetails = ({ characters }) => {
  return (
    <div>
      <h2>Characters:</h2>
      {!!characters.length &&
        characters.map((character, index) => {
          return <Character key={index} character={characters[index]} />;
        })}
      {!characters.length && <p>Nothing to display</p>}
    </div>
  );
};

CharacterDetails.props = {
  characters: PropTypes.array.isRequired
};

export default CharacterDetails;
