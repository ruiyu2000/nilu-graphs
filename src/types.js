// @flow

export type LatLng = {
  latitude: number,
  longitude: number
};

export type Area = {
  zone: string,
  municipality: string,
  area: string
};

export type Station = {
  id: number,
  ...Area,
  station: string,
  ...LatLng,
  owner: string,
  status: string,
  description: string,
  firstMeasurment: string,
  lastMeasurment: string,
  components: string
};

export type AComponent = {
  component: string,
  topic: string
};

export type AQI = {
  index: number,
  fromValue: number,
  toValue: number,
  color: string,
  text: string,
  shortDescription: string,
  description: string,
  advice: string
};

export type Observation = {
  ...Area,
  station: string,
  eoi: ?string,
  component: string,
  fromTime: string,
  toTime: string,
  value: number,
  unit: string,
  ...LatLng,
  timestep: number
};

export type DayMedianValue = {
  dateTime: string,
  value: number,
  count: number,
  coverage: number
};

export type DayMedian = {
  ...Area,
  station: string,
  eoi: string,
  component: string,
  ...LatLng,
  unit: string,
  timestep: number,
  values: Array<DayMedianValue>
};
