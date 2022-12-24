import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/auth/selectors'
import Navigation from "components/Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

const AppBar = () => {
    const isLogin = useSelector(selectIsLoggedIn);
    return (
<>
<div className={css.App__container}>
        <Navigation/>
        { isLogin ? <UserMenu/> : <AuthNav/>}
        
</div>
<div className={css.RegistarteForm__container}>
</div>
</>
)
}

export default AppBar