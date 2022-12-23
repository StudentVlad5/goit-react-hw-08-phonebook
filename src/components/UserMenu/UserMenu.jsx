import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {selectUser} from '../../redux/auth/selectors';
import { logOut } from 'redux/auth/operations';
import css from "./UserMenu.module.css";

const UserMenu = () =>{
const dispatch = useDispatch();
const name = useSelector(selectUser)
const handleOut = (e) => {
      dispatch(
        logOut({})
      );
    };

 return (
        <ul className={css.userMenu__container}>
           <li className={css.userMenu__wellcome}>Wellcome {name}</li>
           <li><Link to={'/'}><button className={css.userMenu__button} type="button" onClick={()=>handleOut()}>Log out</button></Link></li>
        </ul>
    )
}

export default UserMenu