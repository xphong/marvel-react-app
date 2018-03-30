import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Radar as RadarChart } from 'react-chartjs-2';

export default class CharacterPowerLevelRadarChart extends Component {
  render() {
    const { characterChartData } = this.props;

    return (
      <div>
        <RadarChart
          className="chart"
          data={characterChartData}
          width={350}
          height={350}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scale: {
              ticks: {
                maxTicksLimit: 3,
                display: false
              }
            }
          }}
        />
      </div>
    );
  }
}

CharacterPowerLevelRadarChart.propTypes = {
  characterChartData: PropTypes.object.isRequired
};
