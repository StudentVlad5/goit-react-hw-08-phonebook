import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "redux/operations";
import { refreshUser } from "../redux/auth/operations"
import ContactForm from './ContactForms/ContactForm';
import ContactList from './ContactList/ContactList';


export default function App () {
const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

    useEffect(() => {
      dispatch(refreshUser());
    }, [dispatch]);

    return (
      <div
        style={{
          display: 'flex',
          minWidth: 555,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101'
        }}>
  <ContactForm/>
  <div className="list_section">
  <ContactList/>
  </div>
    </div>
    )
  }
  