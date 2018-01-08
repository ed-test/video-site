import React from 'react';
import PropTypes from 'prop-types';
import { branch, compose, mapProps, renderComponent } from 'recompose';

import './styles.css';

import ShowTile from '../ShowTile';

const EmptyShowTileList = () => (
  <div className='ShowTileList'>No shows found.</div>
);

const ShowTileList = ({ featuredShow, shows }) => {
  return (
    <div className='ShowTileList'>
      {featuredShow && <ShowTile isFeatured { ...featuredShow } />}
      <div className='ShowTileList__thumbnails'>
        {shows.length &&
          shows.map(show => <ShowTile key={ show.id } { ...show } />)}
      </div>
    </div>
  );
};

ShowTileList.propTypes = {
  featuredShow: PropTypes.object,
  shows: PropTypes.array,
};

const enhance = compose(
  branch(({ shows }) => !shows.length, renderComponent(EmptyShowTileList)),
  mapProps(({ hasFeatured = true, shows }) => ({
    featuredShow: hasFeatured ? shows[0] : null,
    shows: shows.slice(1, shows.length),
  }))
);

export default enhance(ShowTileList);
