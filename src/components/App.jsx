import React, { Component } from 'react';
import { Phonebookform } from './Phonebooks/Phonebookform';
import { Contacts } from './Contacts/Contacts';
const defaultState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  { id: 'id-5', name: 'Rosie Eden', number: '555-00-26' },
  { id: 'id-6', name: 'Clement Young', number: '344-01-46' },
];

export class App extends Component {
  state = {
    contacts: defaultState,
  };
  addContacts = value => {
    this.setState(prevState => {
      console.log(prevState);
      console.log(value);
    });
  };
  render() {
    return (
      <div>
        <Phonebookform value={this.state} addContacts={this.addContacts} />
        <Contacts dataValue={this.state} />
      </div>
    );
  }
}
