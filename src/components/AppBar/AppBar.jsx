import Navigation from "components/Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

const AppBar = () => {
    return (
<div className={css.App__container}>
        <Navigation/>
        <AuthNav/>
        <UserMenu/>
</div>
)
}

export default AppBar