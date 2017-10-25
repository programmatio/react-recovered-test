import React from "react";
import PropTypes from "prop-types";

const Character = ({ character }) => {
  return (
    <dl>
      <dt>Name</dt>
      <dd>{character.name}</dd>
      <dt>Heigh</dt>
      <dd>{character.height}</dd>
      <dt>Hair Color</dt>
      <dd>{character.hair_color}</dd>
      <dt>Eye Color</dt>
      <dd>{character.eye_color}</dd>
    </dl>
  );
};
Character.propTypes = {
  character: PropTypes.object.isRequired
};

export default Character;
