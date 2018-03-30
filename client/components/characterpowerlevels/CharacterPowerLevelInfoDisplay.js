import React from 'react';
import PropTypes from 'prop-types';

export const CharacterPowerLevelInfoDisplay = props => {
  const { character } = props;

  return <div>
      <h1>{character.Name}</h1>
      <h4>Average Power Level: {character.AveragePowerLevel}</h4>
      <a target="_blank" href={character.Profile_Link}>
        <img className="powerlevel-image fadeIn-animation" src={character.Image_Link} alt={"Image of " + character.Name} />
      </a>
    </div>;
};

CharacterPowerLevelInfoDisplay.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterPowerLevelInfoDisplay;
