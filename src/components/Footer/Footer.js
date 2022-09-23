import './Footer.css';
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Footer() {
  return (
    <div className="footer__global">
        <div className='footer__row'>
            <div className='footer__col1'>
                <h4>GET IN TOUCH</h4>
                <p>Any question? Let us know in store at 8th floor, 379 Hudson St, New York NY 10018 or call us on (+1)96 716 6879</p>
                <div className='footer__col1__icons'>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-pinterest-p"></i>
                <i className="fa-brands fa-snapchat"></i>
                <i className="fa-brands fa-youtube"></i>
                </div>
            </div>
            <div className='footer__col2'>
                <h4>LINKS</h4>
                <ul>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Returns</a></li>
                </ul>
            </div>
            <div className='footer__col3'>
                <h4>LINKS</h4>
                <ul>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Returns</a></li>
                </ul>
            </div>
        </div>
        <div className="footer__copyright">
            <div className="footer__copyright__icons">
            <i className="fa-brands fa-cc-paypal"></i>
            <i className="fa-brands fa-cc-visa"></i>
            <i className="fa-brands fa-cc-mastercard"></i>
            <i className="fa-brands fa-cc-amex"></i>
            <i className="fa-brands fa-cc-discover"></i>
            </div>
            <p>Copyright <i className="fa-solid fa-copyright"></i> All rights reserved.</p>
        </div>
    </div>
  );
}
