// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import type { ReturnType } from '../types';
import { getObservation } from '../actions/observations';
import Graph from '../views/Graph';

const mapStateToProps = state => ({
  selectedArea: state.areas.selectedId,
  selectedComponent: state.components.selectedId,
  selectedStation: state.stations.selectedId,
  observations: state.observations
});

const mapDispatchToProps = {
  dispatchGetObservation: getObservation
};

type ReduxProps = ReturnType<typeof mapStateToProps>;
type ReduxActions = typeof mapDispatchToProps;

type Props = { ...ReduxProps, ...ReduxActions };

class Observation extends Component<Props> {
  componentDidUpdate(prevProps: Props) {
    if (
      this.props.selectedArea !== prevProps.selectedArea ||
      this.props.selectedComponent !== prevProps.selectedComponent ||
      this.props.selectedStation !== prevProps.selectedStation
    ) {
      this.props.dispatchGetObservation();
    }
  }

  get labels() {
    const { observations } = this.props;
    if (!observations || !observations.length) return null;
    return observations[0].values.map(value => value.fromTime);
  }

  get datasets() {
    const { observations } = this.props;
    if (!observations || !observations.length) return null;
    return observations.map((observation, index) => {
      return {
        label: `${observation.station}, ${observation.component}`,
        fill: false,
        lineTension: 0.1,
        backgroundColor: COLORS[index],
        borderColor: COLORS[index],
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: observation.values.map(value => value.value)
      };
    });
  }

  render() {
    console.log(this.datasets);

    return (
      <Graph
        data={{
          labels: this.labels,
          datasets: this.datasets
        }}
      />
    );
  }
}

const COLORS = [
  '#3366CC',
  '#DC3912',
  '#FF9900',
  '#109618',
  '#990099',
  '#3B3EAC',
  '#0099C6',
  '#DD4477',
  '#66AA00',
  '#B82E2E',
  '#316395',
  '#994499',
  '#22AA99',
  '#AAAA11',
  '#6633CC',
  '#E67300',
  '#8B0707',
  '#329262',
  '#5574A6',
  '#3B3EAC'
];

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Observation);
