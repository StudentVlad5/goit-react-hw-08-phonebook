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
        logOut({
        //   name: '',
        //   email: '',
        //   password: '',
        })
      );
    };

 return (
        <ul className={css.userMenu__container}>
           <li>Wellcome {name}</li>
           <li><Link to={'/'}><button type="button" onClick={()=>handleOut()}>Log out</button></Link></li>
        </ul>
    )
}

export default UserMenu