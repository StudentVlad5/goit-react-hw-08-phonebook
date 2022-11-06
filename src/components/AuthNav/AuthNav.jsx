import css from './AuthNav.module.css';

const AuthNav = () =>{
    return (
        <ul className={css.AuthNav__container}>
           <li>Registration</li>
           <li>Log in</li>
        </ul>
    )
}

export default AuthNav