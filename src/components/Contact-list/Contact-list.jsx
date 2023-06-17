import React from 'react';
import PropTypes from 'prop-types';
import ContactListElement from './Contact-list-element';
import css from './Contact-list.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css['contacts-list']}>
    {contacts.map(element => (
      <ContactListElement
        element={element}
        key={element.id}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
