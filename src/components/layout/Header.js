import { ReactComponent as Logo } from './images/Logo.svg';
import './Header.css';

function Nav() {
    return (
        <header>
            <nav className="topNav">
                <Logo />
                <div className="navContent">
                    <ul>
                        <li>
                            <a href="/">HOME</a>
                        </li>
                        <li>
                            <a href="/about">ABOUT</a>
                        </li>
                        <li>
                            <a href="/menu">MENU</a>
                        </li>
                        <li>
                            <a href="/booking">RESERVATIONS</a>
                        </li>
                        <li>
                            <a href="/order-online">ORDER ONLINE</a>
                        </li>
                        <li>
                            <a href="/login">LOGIN</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
  }

  export default Nav;