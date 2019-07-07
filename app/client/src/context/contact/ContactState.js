import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        type: 'personal',
        name: 'Hary White',
        email: 'harry@gmail.com',
        phone: '222-222-2555'
      },
      {
        type: 'personal',
        name: 'Hary White',
        email: 'harry@gmail.com',
        phone: '222-222-2555'
      },
      {
        type: 'professional',
        name: 'Ted Johnson',
        email: 'ted@gmail.com',
        phone: '222-222-2222'
      },
      {
        type: 'professional',
        name: 'Sara Smith',
        email: 'ssmith@gmail.com',
        phone: '111-111-1111'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact
  const addContact = contact => {
    contact.id = uuid.v4();
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };

  // Delete Contact

  // Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
