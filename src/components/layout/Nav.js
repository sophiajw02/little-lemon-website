import { ReactComponent as Logo } from './images/Logo.svg';
import './Nav.css';

function Nav() {
    return (
        <nav className="topNav">
            <div className="navContent">
                <Logo />
                <ul>
                    <li>
                        <a href="#">HOME</a>
                    </li>
                    <li>
                        <a href="#">ABOUT</a>
                    </li>
                    <li>
                        <a href="#">MENU</a>
                    </li>
                    <li>
                        <a href="#">RESERVATIONS</a>
                    </li>
                    <li>
                        <a href="#">ORDER ONLINE</a>
                    </li>
                    <li>
                        <a href="#">LOGIN</a>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
  }
  
  export default Nav;