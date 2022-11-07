import { Link } from "react-router-dom";
import css from './AuthNav.module.css';

const AuthNav = () =>{
    return (
        <ul className={css.AuthNav__container}>
           <li><Link to={'register'}>Registration</Link></li>
           <li><Link to={'login'}>Log in</Link></li>
        </ul>
    )
}

export default AuthNav