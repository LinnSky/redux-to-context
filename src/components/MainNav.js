import { NavLink } from 'react-router-dom';
import './MainNav.css';

const MainNav = props => (
    <header className="main-nav">
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/cart">Cart ({props.cartItemNumber})</NavLink>
                </li>
            </ul>
        </nav>
    </header>
);

export default MainNav;