import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './styles.css';

const Filters = ({ activeFilter, onChangeFilter, options }) => (
  <div className='Filters'>
    Select a filter:
    {options.map(option => (
      <div
        className={ classNames({
          ['Filter-item']: true,
          ['Filter-item--active']: activeFilter === option,
        }) }
        key={ option }
        onClick={ () => onChangeFilter(option) }>
        {option}
      </div>
    ))}
  </div>
);

Filters.propTypes = {
  activeFilter: PropTypes.string,
  onChangeFilter: PropTypes.func,
  options: PropTypes.array,
};

export default Filters;
