/**
 * Created by gilangaramadan on 17-12-17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// The Pokemon Card Details component
// will show the details of selected Pokemon

const PokemonTypes = (types) => {
  return types.map(type =>
    (
      <li key={type.type.name} className="badges-list-item">{type.type.name}</li>
    ));
};

const PokemonStats = (stats) => {
  return stats.map(stat =>
    (
      <div key={stat.stat.name} style={{ marginBottom: '15px' }}>
        <h5 className="text-small text-gray align-left text-stats">{stat.stat.name}</h5>
        <div className="bar color0">
          <span style={{ width: `${Math.min(100, stat.base_stat)}%` }}>{stat.base_stat}</span>
        </div>
      </div>
    ));
};

// const PokemonProfile =

const PokemonCardDetails = (props) => {
  const { pokemon } = props;

  return (

    <div className="col-xs-12 col-md-6">
      <Link to="/" className="button button-secondary block-mobile">
          Browse more Pokémon
      </Link>
      <div className="box card card-detail">
        <h1 className="text-huge text-gray text-number"> # {pokemon.id} </h1>
        <div className="card-image">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="detail-image" />
        </div>
        <div className="pokemon-profile">
          Height: {pokemon.height / 10}m, Weight: {pokemon.weight / 10}kg
        </div>
        <h1 className="text-huge text-gray pokemon-name pokemon-name-detail">
          {pokemon.name}
        </h1>
        <div>
          <ul className="badges-list">
            {PokemonTypes(pokemon.types)}
          </ul>
        </div>
        <div>
          {PokemonStats(pokemon.stats)}
        </div>
      </div>
    </div>

  );
};

PokemonCardDetails.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number,
    sprites: PropTypes.shape({
      front_default: PropTypes.string,
    }),
    name: PropTypes.string,
    height: PropTypes.number,
    weight: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.shape()),
    stats: PropTypes.arrayOf(PropTypes.shape()),
  }),
};

PokemonCardDetails.defaultProps = {
  pokemon: {
    id: null,
    sprites: {
      front_default: '',
    },
    name: '',
    height: null,
    weight: null,
    types: {},
    stats: {},
  },
};

export default PokemonCardDetails;
