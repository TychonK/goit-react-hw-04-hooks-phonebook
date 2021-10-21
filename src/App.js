import './App.scss';
import { useState, useEffect } from 'react';

import ListItems from './components/Contacts_List/ListItems'
import { Form } from './components/Form/Form'
import { Filter } from './components/Filter/Filter'

export default function App() {
    const [contacts, setContacts] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        if (localStorage.getItem("contacts")) {
            setContacts(JSON.parse(localStorage.getItem("contacts")))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("contacts", JSON.stringify(contacts))
    }, [contacts])

    const addNewContact = (obj) => {
        setContacts([...contacts, obj])
    }
  
    const handleSearch = (e) => {
        setFilter(e.target.value)
    }

    const deleteContact = (e) => {
        const contactsList = contacts.filter(contact => contact.name !== e.target.id);
        setContacts(contactsList)
    }

    return (
      <div className="App">
        <Form addNewContact={addNewContact} existing={contacts}/>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter handleSearch={handleSearch} filter={filter}/>
        <ul>
          <ListItems arr={contacts} filter={filter} deleteContact={ deleteContact }/>
        </ul>
      </div>
    )
}