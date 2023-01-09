
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { login, logout} from "../../../../store/authSlice";

const Navbar = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    return(
        <nav className="navbar navbar-light" style={{'backgroundColor':'#e3f2fd', 'padding':'10px 20px'}}>
            <Link className="navbar-brand" to="/blog/home">Home</Link>
            <ul className="navbar-nav" style={{'flexDirection':'row'}}>
                <li className="nav-item me-3 mt-1">
                    <button className="btn btn-link text-decoration-none"
                        onClick={() => {
                            if(isLoggedIn){
                                dispatch(logout())
                            }else{
                                dispatch(login())
                            }
                        }}>{isLoggedIn ? '로그인' : '로그아웃'}</button>
                </li>
                {!isLoggedIn ? <li className="nav-item me-3">
                    <NavLink
                        exact
                        activeClassName="active"
                        className="nav-link"
                        aria-current ="page"
                        to="/blog/admin">Admin
                    </NavLink>
                </li> : null }
                <li className="nav-item">
                    <NavLink
                        exact
                        activeClassName="active"
                        className="nav-link"
                        aria-current ="page"
                        to="/blog">Blog
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;