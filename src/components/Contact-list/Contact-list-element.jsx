import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact-list-element.module.css';

const ContactListElement = ({ element, onDeleteContact }) => (
  <li key={element.id}>
    {element.name}: {element.number}
    <button
      onClick={() => onDeleteContact(element.id)}
      type="button"
      className={css.deleleButton}
    >
      X
    </button>
  </li>
);

ContactListElement.propTypes = {
  friends: PropTypes.object,
};

export default ContactListElement;
