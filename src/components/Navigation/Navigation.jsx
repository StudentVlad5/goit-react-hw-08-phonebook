import { Link } from "react-router-dom";
import css from "./Navigation.module.css";
const Navigation = () =>{
    return (
        <ul className={css.Nav__container}>
           <li><Link to={'/'}>Home</Link></li>
           <li><Link to={'contacts'}>Contacts</Link></li>
        </ul>
    )
}

export default Navigation