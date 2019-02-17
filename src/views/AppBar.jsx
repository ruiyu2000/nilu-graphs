// @flow

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import MAppBar from '@material-ui/core/AppBar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { selectArea } from '../actions/areas';
import { selectStation } from '../actions/stations';
import { selectComponent } from '../actions/components';
import { getStationsFilteredOnArea } from '../selectors/stations';

const mapStateToProps = state => ({
  areas: state.areas,
  components: state.components,
  stations: state.stations,
  filteredStations: getStationsFilteredOnArea(state)
});

const mapDispatchToProps = {
  dispatchSelectArea: selectArea,
  dispatchSelectStation: selectStation,
  dispatchSelectComponent: selectComponent
};

const AppBar = props => {
  const handleChange = event => {
    if (event.target.name === 'area')
      props.dispatchSelectArea(event.target.value);
    else if (event.target.name === 'station')
      props.dispatchSelectStation(event.target.value);
    else if (event.target.name === 'component')
      props.dispatchSelectComponent(event.target.value);
  };

  const renderSelect = (name, items, selectedId) => (
    <StyledFormControl>
      <InputLabel htmlFor={`${name}-select`}>{name}</InputLabel>
      <StyledSelect
        value={selectedId || ''}
        onChange={handleChange}
        inputProps={{
          name,
          id: `${name}-select`
        }}
      >
        <MenuItem value="">None</MenuItem>
        {items &&
          items.map(item => (
            <MenuItem key={item[name]} value={item[name]}>
              {item[name]}
            </MenuItem>
          ))}
      </StyledSelect>
    </StyledFormControl>
  );

  return (
    <StyledAppBar position="sticky">
      {renderSelect('area', props.areas.items, props.areas.selectedId)}
      {renderSelect(
        'station',
        props.filteredStations || props.stations.items,
        props.stations.selectedId
      )}
      {renderSelect(
        'component',
        props.components.items,
        props.components.selectedId
      )}
    </StyledAppBar>
  );
};

const StyledAppBar = styled(MAppBar)`
  && {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    background-color: salmon;
  }
`;

const StyledFormControl = styled(FormControl)`
  && {
    margin: 0 10px;
  }
`;

const StyledSelect = styled(Select)`
  && {
    min-width: 120px;
  }
`;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar);
