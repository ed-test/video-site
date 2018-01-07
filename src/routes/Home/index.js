import React, { Component } from 'react';

import './styles.css';

import { shows } from '../../mock-data';

import ShowTileList from '../../components/ShowTileList';

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <ShowTileList shows={ shows } />
      </div>
    );
  }
}

export default Home;
