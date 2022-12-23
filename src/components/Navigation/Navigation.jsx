import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {selectIsLoggedIn} from '../../redux/auth/selectors';
import css from "./Navigation.module.css";
const Navigation = () =>{
    const isLogin = useSelector(selectIsLoggedIn);
    return (
        <ul className={css.Nav__container}>
           <li><Link to={'/'}><button className={css.Nav__button} type="button">Home</button></Link></li>
           {isLogin && <li><Link to={'contacts'}><button className={css.Nav__button}type="button">Contacts</button></Link></li>}
        </ul>
    )
}

export default Navigation