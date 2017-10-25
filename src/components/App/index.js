import React, { Component } from "react";
import "./App.css";
import { updateName, fetchCharacters } from "../../stateFunctions";

import CharacterSearch from "../CharacterSearch";
import CharacterDetails from "../CharacterDetails";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      fetching: false,
      characters: []
    };
  }

  handleNameUpdate = e => {
    e.preventDefault();
    this.setState(updateName(this.state, e.target.value));
  };

  handleFetchCharacters = async e => {
    e.preventDefault();
    this.setState(await fetchCharacters(this.state, this.state.name));
  };

  render() {
    return (
      <div className="App">
        <h1>Starwars Character Search</h1>
        <CharacterSearch
          name={this.state.name}
          handleNameUpdate={this.handleNameUpdate}
          handleFetchCharacters={this.handleFetchCharacters}
        />
        <CharacterDetails characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
