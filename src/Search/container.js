import { connect } from 'react-redux';
import Search from './component';

const getMonState = (state) => state.monster;
const getMonsterName = (state) => getMonState(state).name || '';

const mapStateToProps = (state) => {
  const pokemonName = getMonsterName(state);
  return {
    pokemonName,
  };
};

const setPokemon = (payload) => {
  return {
    type: 'SET_POKEMON',
    payload,
  };
};

const mapDispatchToProps = (dispatch) => {
  const setPokemonHandler = (payload) => {
    const action = setPokemon(payload);
    dispatch(action);
  };
  return {
    setPokemonHandler,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
