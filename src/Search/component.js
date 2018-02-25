import React, { Component } from 'react';

const searchPokemonById = (id, successHandler, errorHandler) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => {
    if (!res.ok) {
      throw TypeError(res.status);
    }
    return res.json();
  })
  .then(successHandler)
  .catch(errorHandler);
};

class Search extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      name: "",
      err: "",
    };

    this.pokemonNameOnChange = this.pokemonNameOnChange.bind(this);
    this.searchPokemon = this.searchPokemon.bind(this);
  }
  pokemonNameOnChange(event) {
    this.setState({text: event.target.value});
  }
  searchPokemon(event) {
    event.preventDefault();
    const id = this.state.text;
    const successHandler = ({ name }) => this.setState({ name, err: '' });
    const errorHandler = ({ message }) => this.setState({ name: '', err: message });
    searchPokemonById(id, successHandler, errorHandler);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.searchPokemon}>
          Enter Pokemon Name or National Pokedex number:
          <input type="text" name="pokemonName" onChange={this.pokemonNameOnChange} required/>
          <input type="submit" id="submit" value="Search"/>
        </form>
        <p>Name: {this.state.name}</p>
        <p style={{color: 'red'}}>{this.state.err}</p>
      </div>
    );
  }
}

export default Search;
