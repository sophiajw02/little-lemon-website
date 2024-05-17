import footerImage from './images/Footer.jpg';
import './Footer.css';

function Footer() {

    return (
        <footer>
            <div className="footerContainer">
                <img
                    className="footerImage"
                    src={footerImage}
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
                            Phone Number
                        </li>
                        <li>
                            Email
                        </li>
                    </ul>
                </nav>
                <nav id="footerSocial">
                    <h4>Social Media</h4>
                    <ul>
                        <li>
                            Social 1
                        </li>
                        <li>
                            Social 2
                        </li>
                        <li>
                            Social 3
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
  }

  export default Footer;