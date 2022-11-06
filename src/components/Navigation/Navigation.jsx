import css from "./Navigation.module.css";
const Navigation = () =>{
    return (
        <ul className={css.Nav__container}>
           <li>Home</li>
           <li>Contacts</li>
        </ul>
    )
}

export default Navigation