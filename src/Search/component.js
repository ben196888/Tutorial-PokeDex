import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      text: '',
      err: '',
    };

    this.pokemonNameOnChange = this.pokemonNameOnChange.bind(this);
    this.searchPokemon = this.searchPokemon.bind(this);
  }
  pokemonNameOnChange(event) {
    this.setState({text: event.target.value});
  }
  searchPokemon(event) {
    event.preventDefault();
    const { setPokemonHandler } = this.props;
    const id = this.state.text;
    const successHandler = (pokemon) => {
      this.setState({ err: '' });
      setPokemonHandler(pokemon);
    };
    const errorHandler = ({ message }) => this.setState({ err: message });
    searchPokemonById(id, successHandler, errorHandler);
  }
  render() {
    const { pokemonName } = this.props;
    return (
      <div>
        <form onSubmit={this.searchPokemon}>
          Enter Pokemon Name or National Pokedex number:
          <input type="text" name="pokemonName" onChange={this.pokemonNameOnChange} required/>
          <input type="submit" id="submit" value="Search"/>
        </form>
        <p>Name: {pokemonName}</p>
        <p style={{color: 'red'}}>{this.state.err}</p>
      </div>
    );
  }
}

Search.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  setPokemonHandler: PropTypes.func.isRequired,
};

export default Search;
