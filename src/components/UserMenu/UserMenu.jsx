import css from "./UserMenu.module.css";
const UserMenu = () =>{
    return (
        <ul className={css.userMenu__container}>
           <li>Avatar</li>
           <li>Log out</li>
        </ul>
    )
}

export default UserMenu