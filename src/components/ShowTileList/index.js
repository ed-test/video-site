import React from 'react';
import PropTypes from 'prop-types';
import { branch, renderComponent } from 'recompose';

import './styles.css';

import ShowTile from '../ShowTile';

const EmptyShowTileList = () => (
  <div className='ShowTileList'>No shows found.</div>
);

const ShowTileList = ({ shows }) => (
  <div className='ShowTileList'>
    {shows.map(show => <ShowTile { ...show } />)}
  </div>
);

ShowTileList.propTypes = {
  shows: PropTypes.array,
};

const enhance = branch(
  ({ shows }) => !shows.length,
  renderComponent(EmptyShowTileList)
);

export default enhance(ShowTileList);
