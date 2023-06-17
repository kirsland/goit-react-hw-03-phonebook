import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onChange }) => (
  <input
    className={css['filter-input']}
    onChange={onChange}
    type="text"
    name="filter"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Find contacts by name"
  />
);

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
