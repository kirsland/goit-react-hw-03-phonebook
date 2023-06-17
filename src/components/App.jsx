import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'; // model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './Contact-list/Contact-list';
import css from './App.module.css';

class PhoneBook extends React.Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerSubmitForm = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (!this.state.contacts.some(element => element.name === data.name)) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    } else alert(`${data.name} is already in contacts`);
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(element => element.id !== contactId),
    }));
  };

  filterContacts = () => {
    return this.state.contacts.filter(element =>
      element.name.includes(this.state.filter)
    );
  };

  handlerFilterChange = data => {
    this.setState({ filter: data.target.value });
  };

  render() {
    return (
      <div className={css['phone-book']}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onSubmit={this.handlerSubmitForm} />

        <h2 className={css.subtitle}>Contacts</h2>
        <Filter onChange={this.handlerFilterChange} />
        <ContactList
          contacts={this.filterContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default PhoneBook;
