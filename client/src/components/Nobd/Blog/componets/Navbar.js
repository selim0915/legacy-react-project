
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-light" style={{'backgroundColor':'#e3f2fd', 'padding':'10px 20px'}}>
            <Link className="navbar-brand" to="/">Home</Link>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/Blog">Blog</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;