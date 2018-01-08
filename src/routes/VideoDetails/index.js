import React from 'react';
import PropTypes from 'prop-types';
import { compose, mapProps } from 'recompose';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import './styles.css';

import { shows as mockShows } from '../../mock-data';

import ShowTileList from '../../components/ShowTileList';

const VideoDetails = ({ show }) => (
  <div className='VideoDetails'>
    <header>
      <h1>
        <Link to='/'>Discovery Channel</Link>
      </h1>
    </header>
    <iframe
      allow='encrypted-media'
      allowFullScreen
      autoPlay
      frameBorder='0'
      gesture='media'
      height='700'
      src={ `https://www.youtube.com/embed/${
        show.videoid
      }?controls=0&autoplay=1&showinfo=0` }
      width='100%' />
    <h3>Related Videos</h3>
    <ShowTileList hasFeatured={ false } shows={ mockShows } />
  </div>
);

VideoDetails.propTypes = {
  show: PropTypes.object,
  shows: PropTypes.array,
};

const enhance = compose(
  withRouter,
  mapProps(props => {
    const { match } = props;
    const show = mockShows.filter(item => item.id === match.params.id)[0];

    return {
      ...props,
      show,
      shows: mockShows,
    };
  })
);

export default enhance(VideoDetails);
