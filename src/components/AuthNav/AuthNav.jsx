import { Link } from "react-router-dom";
import css from './AuthNav.module.css';

const AuthNav = () =>{
    return (
        <ul className={css.AuthNav__container}>
           <li><Link to={'register'}><button className={css.AuthNav__button} type="button">Registration</button></Link></li>
           <li><Link to={'login'}><button className={css.AuthNav__button} type="button">Log in</button></Link></li>
        </ul>
    )
}

export default AuthNav