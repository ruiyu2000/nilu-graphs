// @flow

import React from 'react';
import { Line } from 'react-chartjs-2';

type Props = { data: Object };

const Graph = (props: Props) => <Line data={props.data} />;

export default Graph;
