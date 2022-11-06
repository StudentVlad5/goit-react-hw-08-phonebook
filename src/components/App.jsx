import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { deleteContact} from "../redux/operations";
import DynamicSort from './DynamicSort/DynamicSort';
import { setFilter} from "../redux/filterSlice";
import {getStatusFilter, getContacts} from '../redux/selectors'
import ContactForm from './ContactForms/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import propTypes from 'prop-types';

export default function App () {

const contacts = [...useSelector(getContacts)].sort(DynamicSort('name'));
const filter = useSelector(getStatusFilter);

const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchContacts());
}, [dispatch]);

function handleRemoveContact  (event) {
  console.log(event);
return (dispatch(deleteContact(event)))
}

function handleFilterChange (filter) {dispatch(setFilter(filter))}

function getVisibleContacts () {
  return (contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase())));
} 

const visibleContacts = getVisibleContacts();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
<ContactForm contacts={contacts}/>
<h2>Contacts List: {visibleContacts.length}</h2>
<h5>Find contact</h5><Filter filter={filter} onChange={handleFilterChange}/>
<div className="list_section">
<ContactList contacts={visibleContacts} onRemove={handleRemoveContact}/>
</div>
  </div>
  )
}

App.propTypes = {
  state: propTypes.arrayOf(
      propTypes.string
  )
}