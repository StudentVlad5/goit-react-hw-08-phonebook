import css from "./UserMenu.module.css";
const UserMenu = () =>{
    return (
        <ul className={css.userMenu__container}>
           <li>User Profile</li>
           <li>Log out</li>
        </ul>
    )
}

export default UserMenu