import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as PowerLevelActions from '../actions/PowerLevelActions';
import CharacterPowerLevelInfo from '../components/characterpowerlevels//CharacterPowerLevelInfo';
import WithLoading from '../components/hocs/WithLoading';

const CharacterPowerLevelInfoWithLoading = WithLoading(CharacterPowerLevelInfo);

export class CharacterPowerLevel extends Component {
  componentDidMount() {
    if (!this.props.powerLevels.data.length) {
      this.props.actions.fetchPowerLevels();
    }
  }

  render() {
    const { powerLevels, params } = this.props;

    return (
      <div>
        <CharacterPowerLevelInfoWithLoading isLoading={powerLevels.isLoading} id={params.id} powerLevels={powerLevels} />
      </div>
    );
  }
}

CharacterPowerLevel.propTypes = {
  powerLevels: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    powerLevels: state.powerLevels
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PowerLevelActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterPowerLevel);
