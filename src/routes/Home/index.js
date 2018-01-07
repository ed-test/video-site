import React, { Component } from 'react';

import './styles.css';

import ShowTileList from '../../components/ShowTileList';
import ShowTile from '../../components/ShowTile';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <ShowTile
          id='1'
          imageUrl='https://placehold.it/400x400'
          isFeatured
          title='Hello World' />
        <ShowTileList shows={ [] } />
      </div>
    );
  }
}

export default Home;
