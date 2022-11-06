import {useState} from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";
import { nanoid } from 'nanoid';
import propTypes from 'prop-types';

function  ContactForm  ({contacts}) {

    const [initial_state, setInitial_state] = useState({
        name: "",
        phone: "",
    });

const dispatch = useDispatch();

function handleChangeForm  (event) {
    const {name, value} = event.target;
    return setInitial_state(initial_state=>({...initial_state, [name]:value}));
}

function handleFormSubmit  (event)  {
    event.preventDefault()
    const id = nanoid();
    const isValidateForm =  validateForm();
    if(isValidateForm){
    let newContact = {createdAt: new Date().toISOString(), name: initial_state.name, phone: initial_state.phone, id:id};
    resetForm ();
    console.log(newContact)
    dispatch(addContact(newContact));
}}

function validateForm () {
    if (!initial_state.name || !initial_state.phone){
        alert('Some field is empty');
        return false}
    else if ([...contacts].filter(key=>key.name === initial_state.name).length > 0){
         alert("contact already exist");
    return false}
    else return true
    }

function resetForm () {
    setInitial_state(initial_state=>({
        name: '',
        phone: '',
    }))
}
        return(
        <form onSubmit={handleFormSubmit}>
            <label>Name
                <input  
                type="text"   
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                value={initial_state.name}
                onChange = {handleChangeForm}
                required/>
            </label>
            <label>Phone
                <input 
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={initial_state.phone}
                onChange = {handleChangeForm}
                required/>
            </label>
            <button type='submit'>Add contact</button>
        </form>)
        
    }



export default ContactForm

ContactForm.propTypes = {
    state: propTypes.arrayOf(
        propTypes.string
    )
}