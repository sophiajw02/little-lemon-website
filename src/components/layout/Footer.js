import footerImage from './images/Footer.jpg';
import logo from './images/logo-default.png';
import './Footer.css';

function Footer() {

    return (
        <footer>
            <div className="footerContainer">
                <img
                    className="footerImage"
                    src={logo}
                    alt="Little Lemon"
                    height={200}
                />
                <nav id="footerNav">
                    <h4>Navigation</h4>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Menu</a>
                        </li>
                        <li>
                            <a href="#">Reservations</a>
                        </li>
                        <li>
                            <a href="#">Order Online</a>
                        </li>
                        <li>
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </nav>
                <nav id="footerContact">
                    <h4>Contact</h4>
                    <ul>
                        <li>
                            Address
                        </li>
                        <li>
                            (123) 456-7890
                        </li>
                        <li>
                            littlelemon@gmail.com
                        </li>
                    </ul>
                </nav>
                <nav id="footerSocial">
                    <h4>Social Media</h4>
                    <ul>
                        <li>
                            Facebook
                        </li>
                        <li>
                            Instagram
                        </li>
                        <li>
                            Twitter
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
  }

  export default Footer;