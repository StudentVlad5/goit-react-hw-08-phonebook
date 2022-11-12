
const ContactListItem = ({id, name, number, onRemove}) => {
    return (
        <li>
            {name}: {number} <button onClick={()=>onRemove(id)}>Delete</button>
        </li>
    )
}

const ContactList = ({contacts, onRemove}) =>{
    if(contacts.length === 0){return null}
    return (
        <ul>
            {contacts.map(contact => <ContactListItem {...contact} onRemove={onRemove} key={contact.id}/>)}
        </ul>
    )
}

export default ContactList