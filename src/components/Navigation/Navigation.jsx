import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectIsLoggedIn} from '../../redux/auth/selectors';
import css from "./Navigation.module.css";
const Navigation = () =>{
    const isLogin = useSelector(selectIsLoggedIn);
    return (
        <ul className={css.Nav__container}>
           <li><Link to={'/'}>Home</Link></li>
           {isLogin && <li><Link to={'contacts'}>Contacts</Link></li>}
        </ul>
    )
}

export default Navigation