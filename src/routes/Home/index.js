import React from 'react';
import PropTypes from 'prop-types';
import { compose, mapProps, withStateHandlers } from 'recompose';
import sortBy from 'lodash.sortby';

import './styles.css';

import { filters, shows as mockShows } from '../../mock-data';

import Filters from '../../components/Filters';
import ShowTileList from '../../components/ShowTileList';

const Home = ({ activeFilter, handleChangeFilter, shows }) => (
  <div className='Home'>
    <header>
      <h1>Discovery Channel</h1>
      <Filters
        activeFilter={ activeFilter }
        onChangeFilter={ handleChangeFilter }
        options={ filters } />
    </header>
    <ShowTileList shows={ shows } />
  </div>
);

Home.propTypes = {
  activeFilter: PropTypes.string,
  handleChangeFilter: PropTypes.func,
  shows: PropTypes.array,
};

const enhance = compose(
  withStateHandlers(
    {
      activeFilter: 'All',
    },
    {
      handleChangeFilter: () => filter => ({
        activeFilter: filter,
      }),
    }
  ),
  mapProps(props => {
    const { activeFilter } = props;
    let shows =
      activeFilter === 'All'
        ? mockShows
        : mockShows.filter(show => show.genre === activeFilter);
    shows = sortBy(shows, ['title']);

    return {
      ...props,
      activeFilter,
      shows,
    };
  })
);

export default enhance(Home);
