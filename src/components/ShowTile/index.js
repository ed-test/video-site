import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './styles.css';

const ShowTile = ({ id, imageUrl, isFeatured = false, title }) => {
  const containerClasses = classNames({
    ShowTile: true,
    Featured: isFeatured,
  });

  return (
    <a className={ containerClasses } href={ id }>
      <img alt={ title } src={ imageUrl } />
      <h2>{title}</h2>
    </a>
  );
};

ShowTile.propTypes = {
  id: PropTypes.string,
  imageUrl: PropTypes.string,
  isFeatured: PropTypes.bool,
  title: PropTypes.string,
};

export default ShowTile;
