/**
 * Created by gilangaramadan on 17-12-17.
 */

import React from 'react';
import PropTypes from 'prop-types';

// The Pokemon component will show an individual Pokemon monster
// It shows an image of the Pokemon and
// shows the name of it as well.

const Pokemon = (props) => {
  const { pokemon, id } = props;
  const img = require(`../assets/images/sprites/${id}.png`);

  return (
    <div className="col-xs-6 col-md-2">
      <div className="box card">
        <div className="card-image">
          <img src={img} alt="Pokemon" />
        </div>
        <div className="text-medium text-gray pokemon-name"> {pokemon.name} </div>
      </div>
    </div>
  );
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  id: PropTypes.number,
};

Pokemon.defaultProps = {
  pokemon: {},
  id: 0,
};

export default Pokemon;
